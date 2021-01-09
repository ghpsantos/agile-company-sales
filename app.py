from flask import Flask
from database.database import initialize_db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/sales_database'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # silence the deprecation warning

@app.route('/')
def hello_world():
    return 'Hello World!'


initialize_db(app)

if __name__ == '__main__':
    app.run()
