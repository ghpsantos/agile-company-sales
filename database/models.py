from .database import db
from .database import ma
from sqlalchemy_utils import PhoneNumber
from sqlalchemy import CheckConstraint


class User(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        username = db.Column(db.String, unique=True)
        name = db.Column(db.String, nullable=False)
        number = db.Column(PhoneNumber, nullable=False)
        sales = db.relationship('Sale', backref='user', lazy=True)


class Sale(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        product = db.Column(db.String, nullable=False)
        quantity = db.Column(db.Integer, CheckConstraint('quantity > 0'), nullable=False)
        sale = db.Column(db.Float, CheckConstraint('sale > 0'), nullable=False)
        date = db.Column(db.Date, nullable=False)
        user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class UserSchema(ma.SQLAlchemyAutoSchema):
        class Meta:
                model = User

class SaleSchema(ma.SQLAlchemyAutoSchema):
        class Meta:
                model = Sale