from resources.user import UserApi, TopFiveApi,UserRevenueApi, UserSalesApi

def initialize_routes(api):
    api.add_resource(UserApi, '/api/users')
    api.add_resource(TopFiveApi, '/api/users/top')
    api.add_resource(UserRevenueApi, '/api/users/revenue')
    api.add_resource(UserSalesApi, '/api/users/sales/<int:id>')
