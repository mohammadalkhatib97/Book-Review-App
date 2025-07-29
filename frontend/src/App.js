import React, { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [reviewData, setReviewData] = useState({ book_id: '', reviewer: '', content: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(console.error);
  }, []);

  function handleChange(e) {
    setReviewData({...reviewData, [e.target.name]: e.target.value});
  }

  function submitReview(e) {
    e.preventDefault();
    fetch('/api/reviews', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(reviewData)
    })
    .then(res => res.json())
    .then(data => {
      setMessage(data.message || data.error);
      setReviewData({ book_id: '', reviewer: '', content: '' });
    })
    .catch(console.error);
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Book Review App</h1>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>

      <h2>Add Review</h2>
      <form onSubmit={submitReview}>
        <input
          name="book_id"
          placeholder="Book ID"
          value={reviewData.book_id}
          onChange={handleChange}
          required
          type="number"
          style={{width: '100%', marginBottom: 10}}
        />
        <input
          name="reviewer"
          placeholder="Your Name"
          value={reviewData.reviewer}
          onChange={handleChange}
          required
          style={{width: '100%', marginBottom: 10}}
        />
        <textarea
          name="content"
          placeholder="Review Content"
          value={reviewData.content}
          onChange={handleChange}
          required
          style={{width: '100%', marginBottom: 10}}
        />
        <button type="submit">Submit Review</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

