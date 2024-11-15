from flask import Blueprint, jsonify
from app.data.load_data import load_destinations

main_bp = Blueprint('main', __name__)

# Route to fetch all destinations
@main_bp.route('/destinations', methods=['GET'])
def get_destinations():
    destinations = load_destinations()
    return jsonify(destinations), 200

# Route to fetch a single destination by ID
@main_bp.route('/destination/<int:id>', methods=['GET'])
def get_destination(id):
    destinations = load_destinations()
    destination = next((d for d in destinations if int(d['id']) == id), None)
    if destination:
        return jsonify(destination), 200
    else:
        return jsonify({"error": "Destination not found"}), 404
