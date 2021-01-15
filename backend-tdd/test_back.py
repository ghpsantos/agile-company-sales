import unittest
from app import app, initialize_db
from database.database import db
from database.models import UserSchema
import json
import random

class RoutesTests(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/sales_test_database'
        initialize_db(app)
        app.app_context().push()
        self.app = app.test_client()
        self.db = db

    def test_root(self):
        response = self.app.get('/')
        self.assertEqual(200, response.status_code)

    #todo if we had a route to add an user, we could've just make a post to id and then an get to check its response
    def test_get_user_sales(self):
        #mocked
        from database.models import User, Sale
        user_schema = UserSchema()
        user = User(name='Michael', username='mvv', number='81 9999-9999')
        sale = Sale(product='Wardrobe', quantity=random.randint(1, 10),
                    sale=round(random.uniform(500, 10000), 2))

        user.sales.append(sale)
        self.db.session.add(user)
        self.db.session.commit()
        #mocked

        response = self.app.get('/api/users/sales/' + str(user.id))

        self.assertCountEqual(json.loads(response.data), user_schema.dump(user))


    def tearDown(self):
        self.db.session.remove()
        self.db.drop_all()