from flask import Blueprint, jsonify, request
from src.models.user import User
from src.models.lead import Lead
from src.models.resource import Resource
from src.models.message import Message
from src.models.project import Project
from src import db
from datetime import datetime

# Create blueprint
leads_bp = Blueprint('leads', __name__)

# Lead management routes
@leads_bp.route('/api/leads', methods=['POST'])
def create_lead():
    data = request.get_json()
    
    # Validate required fields
    if not data.get('name') or not data.get('email'):
        return jsonify({'success': False, 'message': 'Name and email are required'}), 400
    
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

@leads_bp.route('/api/leads', methods=['GET'])
def get_leads():
    # In production, check authentication and authorization
    # This would use a proper auth middleware
    
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

@leads_bp.route('/api/leads/<int:lead_id>', methods=['GET'])
def get_lead(lead_id):
    lead = Lead.query.get(lead_id)
    
    if not lead:
        return jsonify({'success': False, 'message': 'Lead not found'}), 404
    
    return jsonify({
        'success': True,
        'lead': {
            'id': lead.id,
            'name': lead.name,
            'email': lead.email,
            'phone': lead.phone,
            'company': lead.company,
            'message': lead.message,
            'status': lead.status,
            'source': lead.source,
            'created_at': lead.created_at.isoformat()
        }
    }), 200

@leads_bp.route('/api/leads/<int:lead_id>', methods=['PUT'])
def update_lead(lead_id):
    lead = Lead.query.get(lead_id)
    
    if not lead:
        return jsonify({'success': False, 'message': 'Lead not found'}), 404
    
    data = request.get_json()
    
    # Update fields if provided
    if 'name' in data:
        lead.name = data['name']
    if 'email' in data:
        lead.email = data['email']
    if 'phone' in data:
        lead.phone = data['phone']
    if 'company' in data:
        lead.company = data['company']
    if 'message' in data:
        lead.message = data['message']
    if 'status' in data:
        lead.status = data['status']
    if 'source' in data:
        lead.source = data['source']
    
    db.session.commit()
    
    return jsonify({
        'success': True,
        'message': 'Lead updated successfully'
    }), 200

@leads_bp.route('/api/leads/<int:lead_id>', methods=['DELETE'])
def delete_lead(lead_id):
    lead = Lead.query.get(lead_id)
    
    if not lead:
        return jsonify({'success': False, 'message': 'Lead not found'}), 404
    
    db.session.delete(lead)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'message': 'Lead deleted successfully'
    }), 200
