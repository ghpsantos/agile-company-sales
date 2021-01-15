from flask import Flask
from database.database import initialize_db
from flask_restful import Api
from resources.routes import initialize_routes
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
api = Api(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/sales_database'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # silence the deprecation warning

@app.route('/')
def hello_world():
    return 'Hello World!'


initialize_db(app)
initialize_routes(api)

if __name__ == '__main__':
    app.run()


