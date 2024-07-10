import pytest
import sys
import os

# Add the parent directory to the sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../..')))

from foody.App import app as flask_app
from foody.Model import db, userModel, FoodItem

@pytest.fixture
def app():
    flask_app.config.update({
        "TESTING": True,
        "SQLALCHEMY_DATABASE_URI": "sqlite:///:memory:",
    })

    # Re-initialize the db with the testing app
    db.init_app(flask_app)

    with flask_app.app_context():
        db.create_all()

    yield flask_app

    # Cleanup the database after each test
    with flask_app.app_context():
        db.drop_all()

@pytest.fixture
def client(app):
    return app.test_client()
