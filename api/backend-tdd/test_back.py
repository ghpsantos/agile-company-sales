import unittest
from app import app, initialize_db
from database.database import db
from database.models import UserSchema, User, UserAmountSchema
import json

from database.utils import populate_command_with_db

class RoutesTests(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/sales_test_database'
        initialize_db(app)
        app.app_context().push()
        populate_command_with_db(db)
        self.app = app.test_client()
        self.db = db

    def test_get_user_sales(self):
        user = User.query.first()
        user_schema = UserSchema()

        response = self.app.get('/api/users/sales/' + str(user.id))
        self.assertCountEqual(json.loads(response.data), user_schema.dump(user))

    def test_get_users_revenue(self):
        users = User.query.all()

        total_sales = 0
        total_products = 0
        total_users = len(users)

        for user in users:
            for sale in user.sales:
                total_sales += sale.sale
                total_products += sale.quantity

        json_data = {'total_sales': round(total_sales, 2), 'total_products': total_products, 'total_users': total_users}

        response = self.app.get('/api/users/revenue')

        self.assertCountEqual(json.loads(response.data), json_data)

    def test_top_five_users(self):
        users = User.query.all()[:5]
        users_schema = UserAmountSchema(many=True)

        json_data = users_schema.dump(users)
        response = self.app.get('/api/users/top')

        self.assertCountEqual(json.loads(response.data), json_data)

    def tearDown(self):
        self.db.session.remove()
        self.db.drop_all()