from flask import Response
from flask_restful import Resource
from database.models import User, UserSchema

users_schema = UserSchema(many=True)

class UserApi(Resource):

    def get(self):
        users = User.query.all()
        return Response(users_schema.dumps(users), mimetype='application/json', status=200)