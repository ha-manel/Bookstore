import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(
        addBook({
          item_id: books.length + 1,
          title,
          author,
          category,
        }),
      );
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <div id="form-container">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Book title"
          value={title}
          onChange={changeTitle}
        />
        <input
          type="text"
          id="author"
          placeholder="Book author"
          value={author}
          onChange={changeAuthor}
        />
        <input
          type="text"
          id="category"
          placeholder="Book category"
          value={category}
          onChange={changeCategory}
        />
        <button type="submit" id="add-book">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
