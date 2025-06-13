from flask import Blueprint, jsonify, request, session
from src.models.user import User
from src.models.resource import Resource
from src.models.message import Message
from src.models.project import Project
from src import db
import os
from datetime import datetime

# Create blueprint
admin_bp = Blueprint('admin', __name__)

# Admin routes
@admin_bp.route('/api/admin/resources', methods=['POST'])
def add_resource():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user = User.query.get(session['user_id'])
    if not user or user.role != 'admin':
        return jsonify({'success': False, 'message': 'Forbidden'}), 403
    
    data = request.get_json()
    
    if not data or not data.get('name') or not data.get('file_path') or not data.get('file_type') or not data.get('client_id'):
        return jsonify({'success': False, 'message': 'Missing required fields'}), 400
    
    # Check if client exists
    client = User.query.get(data.get('client_id'))
    if not client:
        return jsonify({'success': False, 'message': 'Client not found'}), 404
    
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

@admin_bp.route('/api/admin/messages', methods=['POST'])
def send_admin_message():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user = User.query.get(session['user_id'])
    if not user or user.role != 'admin':
        return jsonify({'success': False, 'message': 'Forbidden'}), 403
    
    data = request.get_json()
    
    if not data or not data.get('content') or not data.get('client_id'):
        return jsonify({'success': False, 'message': 'Missing required fields'}), 400
    
    # Check if client exists
    client = User.query.get(data.get('client_id'))
    if not client:
        return jsonify({'success': False, 'message': 'Client not found'}), 404
    
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

@admin_bp.route('/api/admin/clients', methods=['GET'])
def get_clients():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user = User.query.get(session['user_id'])
    if not user or user.role != 'admin':
        return jsonify({'success': False, 'message': 'Forbidden'}), 403
    
    clients = User.query.filter_by(role='client').all()
    
    clients_data = []
    for client in clients:
        clients_data.append({
            'id': client.id,
            'name': client.name,
            'email': client.email,
            'company': client.company,
            'created_at': client.created_at.isoformat()
        })
    
    return jsonify({
        'success': True,
        'clients': clients_data
    }), 200

@admin_bp.route('/api/admin/projects', methods=['POST'])
def create_project():
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user = User.query.get(session['user_id'])
    if not user or user.role != 'admin':
        return jsonify({'success': False, 'message': 'Forbidden'}), 403
    
    data = request.get_json()
    
    if not data or not data.get('name') or not data.get('client_id'):
        return jsonify({'success': False, 'message': 'Missing required fields'}), 400
    
    # Check if client exists
    client = User.query.get(data.get('client_id'))
    if not client:
        return jsonify({'success': False, 'message': 'Client not found'}), 404
    
    # Check if client already has a project
    existing_project = Project.query.filter_by(user_id=data.get('client_id')).first()
    if existing_project:
        return jsonify({'success': False, 'message': 'Client already has a project'}), 400
    
    new_project = Project(
        name=data.get('name'),
        status=data.get('status', 'pending'),
        next_steps=data.get('next_steps', ''),
        user_id=data.get('client_id')
    )
    
    db.session.add(new_project)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'project': {
            'id': new_project.id,
            'name': new_project.name,
            'status': new_project.status
        }
    }), 201

@admin_bp.route('/api/admin/projects/<int:project_id>', methods=['PUT'])
def update_project(project_id):
    if 'user_id' not in session:
        return jsonify({'success': False, 'message': 'Unauthorized'}), 401
    
    user = User.query.get(session['user_id'])
    if not user or user.role != 'admin':
        return jsonify({'success': False, 'message': 'Forbidden'}), 403
    
    project = Project.query.get(project_id)
    if not project:
        return jsonify({'success': False, 'message': 'Project not found'}), 404
    
    data = request.get_json()
    
    # Update fields if provided
    if 'name' in data:
        project.name = data['name']
    if 'status' in data:
        project.status = data['status']
    if 'next_steps' in data:
        project.next_steps = data['next_steps']
    
    db.session.commit()
    
    return jsonify({
        'success': True,
        'message': 'Project updated successfully'
    }), 200
