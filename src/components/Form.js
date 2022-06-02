import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ addNewBook }) => (
  <div id="form-container">
    <form onSubmit={addNewBook}>
      <input type="text" id="title" placeholder="Book title" />
      <input type="text" id="author" placeholder="Book author" />
      <button type="submit" id="add-book">ADD BOOK</button>
    </form>
  </div>
);

Form.propTypes = {
  addNewBook: PropTypes.func.isRequired,
};

export default Form;
