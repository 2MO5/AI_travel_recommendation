from flask import Blueprint

# Create the main blueprint
main_bp = Blueprint('main', __name__)

# Import the routes to associate them with the blueprint
from app.main import routes
