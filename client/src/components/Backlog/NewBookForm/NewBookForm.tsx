import React, { useState } from 'react';
import { BookStateObject } from '../../../ts/interfaces/interfaces';
import { initialBookState } from '../initialValues';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/Books/actions';

const NewBookForm: React.FC = () => {
  const dispatch = useDispatch();
  const [newBookForm, setNewBookForm] = useState<BookStateObject>(initialBookState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewBookForm(prev => ({ ...prev, [name]: value }));
  }

  const submitNewBook = (e: any) => {
    e.preventDefault();
    let newBook = newBookForm;
    newBook.status = 'On Backlog';
    newBook.dateCreated = new Date().toISOString();
    newBook.id = uuidv4();
    dispatch(addBook(newBook)); // setNewBookForm(initialBookState); //turn off newBookForm after adding one
  }

  const handleSelect = (e: any) => {
    const { value } = e.target;
    setNewBookForm(prev => ({ ...prev, type: value }));
  }

  return (
    <form onSubmit={submitNewBook}>
      <input type="text" placeholder="title" name="title" onChange={handleChange} required />
      <input type="text" placeholder="author" name="author" onChange={handleChange} required />
      <input type="text" placeholder="year" name="year" onChange={handleChange} />
      <input type="text" placeholder="pages" name="pages" onChange={handleChange} />
      <select onChange={handleSelect}>
        <option value="Fiction" placeholder="Fiction">Fiction</option>
        <option value="NonFiction" placeholder="NonFiction">Non Fiction</option>
        <option value="Science" placeholder="Science">Science</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default NewBookForm;