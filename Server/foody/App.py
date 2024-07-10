from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from Model import userModel, db, FoodItem
import os
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

api = Api(app)

class Config1:
    secret_key = 'super secret key'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:Password%401@localhost:3306/foodlist'
    SQLALCHEMY_TRACK_NOTIFICATIONS = False

app.config.from_object(Config1)

db.init_app(app)

with app.app_context():
    db.create_all()

class register(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        firstName = data.get('firstName')
        lastName = data.get('lastName')
        email = data.get('email')
        password = data.get('password')

        new_user = userModel(username=username, firstName=firstName, lastName=lastName, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()
        return 200

class Login(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        user = userModel.query.filter_by(username=username).first()

        if user and user.password == password:
            return  200
        else:
            return  401

class Food(Resource):
    def get(self):
        food_type = request.args.get('food_type')

        if food_type:
            food_items = FoodItem.query.filter_by(food_type=food_type).all()
        else:
            food_items = FoodItem.query.all()
        
        flist = []
        for food in food_items:
            food_detail = {
                'id': food.id,
                'name': food.name,
                'price': food.price,
                'food_type': food.food_type
            }
            flist.append(food_detail)
            
        return (flist), 200

api.add_resource(register, "/register")
api.add_resource(Login, "/login")
api.add_resource(Food, "/getfood")
app.run(port=5555, debug=True)
