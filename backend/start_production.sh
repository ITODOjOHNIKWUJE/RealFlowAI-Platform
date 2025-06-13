#!/bin/bash

# Activate virtual environment
source venv/bin/activate

# Start the Flask application using Gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 src.main:app

