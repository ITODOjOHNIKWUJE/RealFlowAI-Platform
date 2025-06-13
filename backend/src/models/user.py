from src import db
from datetime import datetime

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
