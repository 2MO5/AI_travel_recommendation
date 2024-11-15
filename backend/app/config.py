import os

class Config:
    DEBUG = False
    TESTING = False
    SECRET_KEY = os.environ.get("SECRET_KEY", "supersecretkey")  # Use environment variable for production
    JSON_SORT_KEYS = False  # Prevent JSON responses from sorting keys automatically


class DevelopmentConfig(Config):
    DEBUG = True
    CORS_ALLOWED_ORIGINS = ["http://localhost:5000"]  # Allow frontend during development


class TestingConfig(Config):
    TESTING = True


class ProductionConfig(Config):
    SECRET_KEY = os.environ.get("SECRET_KEY")
    CORS_ALLOWED_ORIGINS = ["https://aitravel.com"]


config = {
    "development": DevelopmentConfig,
    "testing": TestingConfig,
    "production": ProductionConfig,
}
