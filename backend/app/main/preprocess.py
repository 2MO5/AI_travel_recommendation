from sklearn.preprocessing import LabelEncoder

def encode_preferences(data):
    """
    Encode categorical features for use in machine learning models.
    """
    label_encoder = LabelEncoder()
    data["season_encoded"] = label_encoder.fit_transform(data["season"])
    data["interests_encoded"] = label_encoder.fit_transform(data["interests"])
    return data

def preprocess_user_input(user_input):
    """
    Preprocess user input to align with encoded dataset.
    """
    season_encoder = LabelEncoder()
    interests_encoder = LabelEncoder()

    # Example of encoding user inputs
    user_input["season_encoded"] = season_encoder.fit_transform([user_input["season"]])[0]
    user_input["interests_encoded"] = interests_encoder.fit_transform([user_input["interests"]])[0]
    return user_input
