from .database import db
from .database import ma
from sqlalchemy_utils import PhoneNumber
from sqlalchemy import CheckConstraint
import datetime
from marshmallow import fields

class User(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        username = db.Column(db.String, unique=True)
        name = db.Column(db.String, nullable=False)
        number = db.Column(db.String, nullable=False)
        sales = db.relationship('Sale', backref='user', lazy=True)


class Sale(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        product = db.Column(db.String, nullable=False)
        quantity = db.Column(db.Integer, CheckConstraint('quantity > 0'), nullable=False)
        sale = db.Column(db.Float, CheckConstraint('sale > 0'), nullable=False)
        date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow())
        user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


class UserAmountSchema(ma.SQLAlchemySchema):
        class Meta:
                model = User

        username = ma.auto_field()
        total_amount = fields.Method('sales_amount')

        def sales_amount(self, user):
                total_amount = 0
                for sale in user.sales:
                        total_amount += sale.quantity

                return total_amount

class SaleSchema(ma.SQLAlchemyAutoSchema):
        class Meta:
                model = Sale