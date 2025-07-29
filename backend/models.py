from db import db

class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {"id": self.id, "title": self.title, "author": self.author}

class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
    reviewer = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=False)

