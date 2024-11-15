from flask import jsonify

def handle_error(error):
    """
    Standard error handler for the application.
    """
    return jsonify({"success": False, "error": str(error)}), 500

def evaluate_recommendations(recommendations, user_feedback):
    """
    Evaluate recommendations based on user feedback.
    """
    scores = []
    for algo, results in recommendations.items():
        score = sum(1 for rec in results if rec in user_feedback) / len(user_feedback)
        scores.append({"algorithm": algo, "score": score})
    return scores
