import json

from foody.Model import FoodItem
from foody.Model import db

def test_register(client):
    response = client.post('/register', data=json.dumps({
        "username": "testuser",
        "firstName": "Test",
        "lastName": "User",
        "email": "testuser@example.com",
        "password": "password"
    }), content_type='application/json')
    
    assert response.status_code == 200

def test_login(client):
    # First, register a new user
    client.post('/register', data=json.dumps({
        "username": "testuser",
        "firstName": "Test",
        "lastName": "User",
        "email": "testuser@example.com",
        "password": "password"
    }), content_type='application/json')
    
    # Now, test login with the registered user
    response = client.post('/login', data=json.dumps({
        "username": "testuser",
        "password": "password"
    }), content_type='application/json')
    
    assert response.status_code == 200

def test_login_invalid(client):
    response = client.post('/login', data=json.dumps({
        "username": "invaliduser",
        "password": "invalidpassword"
    }), content_type='application/json')
    
    assert response.status_code == 401

def test_get_food(client):
    # Add some food items to the database
    with client.application.app_context():
        db.session.add(FoodItem(name='Pizza', food_type='Italian', price=9.99))
        db.session.add(FoodItem(name='Sushi', food_type='Japanese', price=12.99))
        db.session.commit()

    response = client.get('/getfood')
    data = response.get_json()

    assert response.status_code == 200
    assert len(data) == 2
