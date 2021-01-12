from flask import Response, json
from flask_restful import Resource
from database.models import User, UserAmountSchema, UserSchema

users_schema = UserAmountSchema(many=True)
user_schema = UserSchema()

class UserApi(Resource):

    def get(self):
        users = User.query.all()
        response = users_schema.dump(users)
        response = json.dumps(sorted(response, key= lambda entry: entry['total_amount'], reverse=True))
        return Response(response, mimetype='application/json', status=200)

class TopFiveApi(Resource):
    def get(self):
        users = User.query.all()[:5]
        response = users_schema.dump(users)
        response = json.dumps(sorted(response, key=lambda entry: entry['total_amount'], reverse=True))
        return Response(response, mimetype='application/json', status=200)


class UserRevenueApi(Resource):
    def get(self):
        users = User.query.all()

        total_sales = 0
        total_products = 0
        total_users = len(users)

        for user in users:
            for sale in user.sales:
                total_sales += sale.sale
                total_products += sale.quantity

        json_data = {'total_sales': round(total_sales, 2), 'total_products': total_products, 'total_users': total_users}

        return Response(json.dumps(json_data), mimetype='application/json', status=200)


class UserSalesApi(Resource):
    def get(self, id):
        user = User.query.filter_by(id=id).first()
        return Response(user_schema.dumps(user), mimetype='application/json', status=200)
