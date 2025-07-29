from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def init_db():
    from models import Book
    db.create_all()

