import pandas as pd
from sklearn.neighbors import NearestNeighbors
from app.main.preprocess import encode_preferences

# Load the dataset
data = pd.read_csv("app/data/destinations.csv")

# Encode categorical features (e.g., season, interests)
data = encode_preferences(data)

# Train a collaborative filtering model
model = NearestNeighbors(n_neighbors=5, metric="cosine")
features = data[["budget", "season_encoded", "interests_encoded"]]
model.fit(features)

def content_based_filtering(user_preferences):
    """
    Content-based filtering logic.
    """
    filtered_data = data[
        (data["budget"] <= user_preferences["budget"]) &
        (data["season"] == user_preferences["season"])
    ]
    return filtered_data.to_dict(orient="records")

def collaborative_filtering(user_preferences):
    """
    Collaborative filtering logic.
    """
    user_vector = [
        user_preferences["budget"],
        user_preferences["season_encoded"],
        user_preferences["interests_encoded"]
    ]
    distances, indices = model.kneighbors([user_vector])
    recommendations = data.iloc[indices[0]].to_dict(orient="records")
    return recommendations

def compare_algorithms(user_preferences):
    """
    Compare results from different recommendation methodologies.
    """
    content_based_results = content_based_filtering(user_preferences)
    collaborative_results = collaborative_filtering(user_preferences)
    return {
        "content_based": content_based_results,
        "collaborative": collaborative_results
    }
