from flask import Flask, jsonify, request
from db import db, init_db
from models import Book, Review
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgrespassword@postgres-service:5432/bookdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def home():
    return "📚 Book Review API Running!"

@app.route('/api/books')
def get_books():
    books = Book.query.all()
    return jsonify([b.to_dict() for b in books])

@app.route('/api/reviews', methods=['POST'])
def add_review():
    data = request.json
    book_id = data.get('book_id')
    reviewer = data.get('reviewer')
    content = data.get('content')
    if not all([book_id, reviewer, content]):
        return jsonify({"error": "Missing fields"}), 400

    review = Review(book_id=book_id, reviewer=reviewer, content=content)
    db.session.add(review)
    db.session.commit()
    return jsonify({"message": "Review added"}), 201

if __name__ == '__main__':
    with app.app_context():
        init_db()
    app.run(host='0.0.0.0', port=5000)

