from flask import Flask, jsonify, request
from flask_cors import CORS
import logging
import time

app = Flask(__name__)
CORS(app)

# Logging setup
logging.basicConfig(level=logging.INFO, filename='realflow.log',
                    format='%(asctime)s %(levelname)s: %(message)s')

# Monitoring
@app.before_request
def before_request():
    request.start_time = time.time()

@app.after_request
def after_request(response):
    duration = time.time() - request.start_time
    logging.info(f"{request.method} {request.path} - {response.status_code} - {duration:.3f}s")
    return response

# Homepage
@app.route('/')
def homepage():
    return """
    <html>
    <head><title>RealFlow AI</title></head>
    <body>
        <h1>Welcome to RealFlow AI!</h1>
        <p>The server is running smoothly.</p>
    </body>
    </html>
    """

# Example APIs
@app.route('/api/leads', methods=['GET'])
def get_leads():
    return jsonify({"leads": [{"name": "John Doe"}, {"name": "Jane Smith"}]})

@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify({"projects": [{"title": "AI Chatbot"}, {"title": "Data Cleaner"}]})

@app.route('/api/analytics', methods=['GET'])
def get_analytics():
    return jsonify({"visits": 1245, "conversions": 112})

# Health check
@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "OK"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)

