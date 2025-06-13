from flask import Blueprint, jsonify, request, session, send_from_directory
from src.models.user import User
from src.models.resource import Resource
from src.models.message import Message
from src.models.project import Project
from src import db
import os
from datetime import datetime

# Create blueprint
client_bp = Blueprint('client', __name__)

# Client portal routes
@client_bp.route('/api/client/resources', methods=['GET'])
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

@client_bp.route('/api/client/resources/<int:resource_id>', methods=['GET'])
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

@client_bp.route('/api/client/messages', methods=['GET'])
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

@client_bp.route('/api/client/messages', methods=['POST'])
def send_client_message():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    data = request.get_json()
    
    if not data.get('content'):
        return jsonify({'success': False, 'message': 'Message content is required'}), 400
    
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

@client_bp.route('/api/client/project', methods=['GET'])
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
