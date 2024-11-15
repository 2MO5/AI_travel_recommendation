from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    # Configuration setup (optional for now)
    app.config['SECRET_KEY'] = 'your_secret_key'

    # Enable CORS for frontend-backend communication
    CORS(app, resources={r"/*": {"origins": "http://localhost:5000"}})

    # Register blueprints
    from app.main.routes import main_bp
    app.register_blueprint(main_bp)

    return app
