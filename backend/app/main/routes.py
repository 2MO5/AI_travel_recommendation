from flask import Blueprint, jsonify, request
from app.data.load_data import load_destinations
from app.main.model import compare_algorithms
from app.main.utils import handle_error

main_bp = Blueprint('main', __name__)

# Route to fetch all destinations
@main_bp.route('/destinations', methods=['GET'])
def get_destinations():
    try:
        destinations = load_destinations()
        return jsonify(destinations), 200
    except Exception as e:
        return handle_error(e)

# Route to fetch a single destination by ID
@main_bp.route('/destinations/<int:id>', methods=['GET'])
def get_destination(id):
    try:
        destinations = load_destinations()
        destination = next((d for d in destinations if int(d['id']) == id), None)
        if destination:
            return jsonify(destination), 200
        else:
            return jsonify({"error": "Destination not found"}), 404
    except Exception as e:
        return handle_error(e)

# Route for recommending destinations
@main_bp.route('/recommend', methods=['POST'])
def recommend():
    """
    API endpoint to recommend destinations based on user preferences.
    """
    try:
        user_preferences = request.get_json()
        if not user_preferences:
            return jsonify({"error": "Invalid input. Please provide user preferences."}), 400

        # Get recommendations using the model logic
        recommendations = compare_algorithms(user_preferences)
        return jsonify({
            "success": True,
            "recommendations": recommendations
        }), 200
    except Exception as e:
        return handle_error(e)
