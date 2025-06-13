from flask import Blueprint, jsonify, request, session
from src.models.user import User
from src import db
from datetime import datetime
import secrets

# Create blueprint
auth_bp = Blueprint('auth', __name__)

# Authentication routes
@auth_bp.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({'success': False, 'message': 'Email and password are required'}), 400
    
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

@auth_bp.route('/api/auth/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({'success': True}), 200

@auth_bp.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json()
    
    if not data or not data.get('email') or not data.get('password') or not data.get('name'):
        return jsonify({'success': False, 'message': 'Email, password, and name are required'}), 400
    
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

@auth_bp.route('/api/auth/user', methods=['GET'])
def get_current_user():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Not authenticated'}), 401
    
    user = User.query.get(session['user_id'])
    
    if not user:
        session.pop('user_id', None)
        return jsonify({'success': False, 'message': 'User not found'}), 404
    
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
