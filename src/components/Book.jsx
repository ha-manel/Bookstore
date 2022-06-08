import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const deleteBook = (bookId) => {
    dispatch(removeBook(Number(bookId)));
  };

  return (
    <div className="book-container">
      <div className="book-info">
        <p className="book-categorie">{category}</p>
        <h3 className="book-title">{title}</h3>
        <h4 className="book-author">{author}</h4>
        <div className="book-buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={() => deleteBook(id)}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="progress-text">
          <p>50%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-update">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
