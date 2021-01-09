from resources.user import UserApi

def initialize_routes(api):
    api.add_resource(UserApi, '/api/users')
