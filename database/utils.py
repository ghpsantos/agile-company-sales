from app import app

@app.cli.command('populatedb')
def populate():
    from database.database import db
    with app.app_context():
        db.create_all()

    populate_command_with_db(db)


def populate_command_with_db(db):
    from database.models import User, Sale

    users = [('Joao', 'josk'), ('Maria', 'mpp'), ('Isabelly', 'isp'), ('Victor', 'vsp'), ('Lais', 'lssv'), ('Pedro', 'psse'), ('Ricardo', 'rlsc'), ('Luiz', 'llv')]
    sales = ['Car', 'PC', 'Laptop', 'Wardrobe', 'House']
    import random

    for name, username in users:
        user = User(name=name, username=username, number='81 9999-9999')
        db.session.add(user)

        num_of_sales = random.randint(1, 10)
        for _ in range(0, num_of_sales):
            sale = Sale(product=sales[random.randint(0, len(sales)-1)], quantity=random.randint(1, 10), sale=round(random.uniform(500, 10000),2))
            user.sales.append(sale)
            db.session.add(sale)

        db.session.commit()

