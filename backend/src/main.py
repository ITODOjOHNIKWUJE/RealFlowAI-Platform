from flask import Flask, jsonify, request, session, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
import sys
import json
from datetime import datetime, timedelta
import secrets
import uuid

# Add the parent directory to sys.path
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

# Initialize Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = secrets.token_hex(16)
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SESSION_PERMANENT'] = True
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=7)

# Enable CORS for frontend integration
CORS(app, supports_credentials=True)

# Configure database
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///realflow.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database
db = SQLAlchemy(app)

# Define models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)  # Will be hashed in production
    name = db.Column(db.String(100), nullable=False)
    company = db.Column(db.String(100), nullable=True)
    role = db.Column(db.String(20), default='client')  # client, admin
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    leads = db.relationship('Lead', backref='owner', lazy=True)
    resources = db.relationship('Resource', backref='owner', lazy=True)
    messages = db.relationship('Message', backref='owner', lazy=True)

class Lead(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    company = db.Column(db.String(100), nullable=True)
    message = db.Column(db.Text, nullable=True)
    status = db.Column(db.String(20), default='new')  # new, contacted, qualified, converted
    source = db.Column(db.String(50), nullable=True)  # website, referral, etc.
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

class Resource(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    file_path = db.Column(db.String(255), nullable=False)
    file_type = db.Column(db.String(20), nullable=False)  # PDF, DOC, etc.
    description = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    is_from_admin = db.Column(db.Boolean, default=False)
    is_read = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(20), default='pending')  # pending, in_progress, completed
    next_steps = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

# Create database tables
with app.app_context():
    db.create_all()
    
    # Add initial admin user if not exists
    admin = User.query.filter_by(email='admin@realflowai.com').first()
    if not admin:
        admin = User(
            email='admin@realflowai.com',
            password='admin123',  # This would be hashed in production
            name='Admin User',
            role='admin'
        )
        db.session.add(admin)
        db.session.commit()

# API Routes
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'RealFlow AI API is running'}), 200

# Authentication routes
@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    user = User.query.filter_by(email=email).first()
    
    if user and user.password == password:  # In production, use proper password hashing
        session['user_id'] = user.id
        return jsonify({
            'success': True,
            'user': {
                'id': user.id,
                'name': user.name,
                'email': user.email,
                'company': user.company,
                'role': user.role
            }
        }), 200
    
    return jsonify({'success': False, 'message': 'Invalid credentials'}), 401

@app.route('/api/auth/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({'success': True}), 200

@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json()
    
    # Check if user already exists
    existing_user = User.query.filter_by(email=data.get('email')).first()
    if existing_user:
        return jsonify({'success': False, 'message': 'Email already registered'}), 400
    
    # Create new user
    new_user = User(
        email=data.get('email'),
        password=data.get('password'),  # In production, hash this password
        name=data.get('name'),
        company=data.get('company', '')
    )
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'user': {
            'id': new_user.id,
            'name': new_user.name,
            'email': new_user.email
        }
    }), 201

# Lead management routes
@app.route('/api/leads', methods=['POST'])
def create_lead():
    data = request.get_json()
    
    new_lead = Lead(
        name=data.get('name'),
        email=data.get('email'),
        phone=data.get('phone', ''),
        company=data.get('company', ''),
        message=data.get('message', ''),
        source=data.get('source', 'website')
    )
    
    db.session.add(new_lead)
    db.session.commit()
    
    # In a real implementation, we would send notification emails here
    
    return jsonify({
        'success': True,
        'message': 'Lead created successfully'
    }), 201

@app.route('/api/leads', methods=['GET'])
def get_leads():
    # In production, check authentication and authorization
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user = User.query.get(session['user_id'])
    if user.role != 'admin':
        return jsonify({'success': False, 'message': 'Forbidden'}), 403
    
    leads = Lead.query.order_by(Lead.created_at.desc()).all()
    
    leads_data = []
    for lead in leads:
        leads_data.append({
            'id': lead.id,
            'name': lead.name,
            'email': lead.email,
            'phone': lead.phone,
            'company': lead.company,
            'message': lead.message,
            'status': lead.status,
            'source': lead.source,
            'created_at': lead.created_at.isoformat()
        })
    
    return jsonify({
        'success': True,
        'leads': leads_data
    }), 200

# Client portal routes
@app.route('/api/client/resources', methods=['GET'])
def get_client_resources():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user_id = session['user_id']
    resources = Resource.query.filter_by(user_id=user_id).order_by(Resource.created_at.desc()).all()
    
    resources_data = []
    for resource in resources:
        resources_data.append({
            'id': resource.id,
            'name': resource.name,
            'file_type': resource.file_type,
            'description': resource.description,
            'created_at': resource.created_at.isoformat()
        })
    
    return jsonify({
        'success': True,
        'resources': resources_data
    }), 200

@app.route('/api/client/resources/<int:resource_id>', methods=['GET'])
def download_resource(resource_id):
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user_id = session['user_id']
    resource = Resource.query.filter_by(id=resource_id, user_id=user_id).first()
    
    if not resource:
        return jsonify({'success': False, 'message': 'Resource not found'}), 404
    
    # Get directory and filename from file_path
    directory = os.path.dirname(resource.file_path)
    filename = os.path.basename(resource.file_path)
    
    return send_from_directory(directory, filename, as_attachment=True)

@app.route('/api/client/messages', methods=['GET'])
def get_client_messages():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user_id = session['user_id']
    messages = Message.query.filter_by(user_id=user_id).order_by(Message.created_at.desc()).all()
    
    messages_data = []
    for message in messages:
        messages_data.append({
            'id': message.id,
            'content': message.content,
            'is_from_admin': message.is_from_admin,
            'is_read': message.is_read,
            'created_at': message.created_at.isoformat()
        })
    
    return jsonify({
        'success': True,
        'messages': messages_data
    }), 200

@app.route('/api/client/messages', methods=['POST'])
def send_client_message():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    data = request.get_json()
    user_id = session['user_id']
    
    new_message = Message(
        content=data.get('content'),
        is_from_admin=False,
        user_id=user_id
    )
    
    db.session.add(new_message)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'message': {
            'id': new_message.id,
            'content': new_message.content,
            'is_from_admin': new_message.is_from_admin,
            'is_read': new_message.is_read,
            'created_at': new_message.created_at.isoformat()
        }
    }), 201

@app.route('/api/client/project', methods=['GET'])
def get_client_project():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user_id = session['user_id']
    project = Project.query.filter_by(user_id=user_id).first()
    
    if not project:
        return jsonify({'success': False, 'message': 'No project found'}), 404
    
    return jsonify({
        'success': True,
        'project': {
            'id': project.id,
            'name': project.name,
            'status': project.status,
            'next_steps': project.next_steps,
            'created_at': project.created_at.isoformat()
        }
    }), 200

# Admin routes
@app.route('/api/admin/resources', methods=['POST'])
def add_resource():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user = User.query.get(session['user_id'])
    if user.role != 'admin':
        return jsonify({'success': False, 'message': 'Forbidden'}), 403
    
    # In a real implementation, handle file upload
    data = request.get_json()
    
    new_resource = Resource(
        name=data.get('name'),
        file_path=data.get('file_path'),  # This would be the actual file path after upload
        file_type=data.get('file_type'),
        description=data.get('description', ''),
        user_id=data.get('client_id')
    )
    
    db.session.add(new_resource)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'resource': {
            'id': new_resource.id,
            'name': new_resource.name,
            'file_type': new_resource.file_type
        }
    }), 201

@app.route('/api/admin/messages', methods=['POST'])
def send_admin_message():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user = User.query.get(session['user_id'])
    if user.role != 'admin':
        return jsonify({'success': False, 'message': 'Forbidden'}), 403
    
    data = request.get_json()
    
    new_message = Message(
        content=data.get('content'),
        is_from_admin=True,
        user_id=data.get('client_id')
    )
    
    db.session.add(new_message)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'message': {
            'id': new_message.id,
            'content': new_message.content,
            'is_from_admin': new_message.is_from_admin,
            'created_at': new_message.created_at.isoformat()
        }
    }), 201

# Main entry point
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
