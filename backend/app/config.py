import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key')
    # Add other configurations as needed, like database URIs or API keys
