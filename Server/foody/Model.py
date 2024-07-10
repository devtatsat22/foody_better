from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class userModel(db.Model):
    __tablename__ = "authenticationData"

    #    defining the  field structure of DB

    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50))
    email = db.Column(db.String(50), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)

    # constructer with args
    def __init__(self, username, firstName, lastName, email, password):
        self.username = username
        self.firstName = firstName
        self.lastName = lastName
        self.email = email
        self.password = password


class FoodItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    food_type = db.Column(db.String(20), nullable=False)
    price = db.Column(db.Float, nullable=False)

     # constructer with args
    def __init__(self, name, food_type, price):
        self.name = name
        self.food_type = food_type
        self.price = price
