import React, { useState } from 'react';
import Book from './Book';
import Form from './Form';

const BooksList = () => {
  const [booksList, setBooksList] = useState([
    {
      id: 1,
      title: 'test',
      author: 'test',
    },
    {
      id: 2,
      title: 'test',
      author: 'test',
    },
  ]);

  const addNewBook = (title, author) => {
    const book = {
      id: booksList.length + 1,
      title,
      author,
    };
    setBooksList([...booksList, book]);
  };

  return (
    <section id="books-page">
      {booksList.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form addNewBook={addNewBook} />
    </section>
  );
};
export default BooksList;
