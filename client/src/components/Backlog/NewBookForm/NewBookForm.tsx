import React, { useState } from 'react';
import { StoreType, NewBookData } from '../../../ts/interfaces/interfaces';
import { initialBookState } from '../initialValues';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../../redux/Books/actions';
import { BookStateObject } from '../../../redux/Books/interfaces';

const NewBookForm: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((store: StoreType) => store.user.token);
  const [newBookForm, setNewBookForm] = useState<NewBookData>(initialBookState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewBookForm((prev) => ({ ...prev, [name]: value }));
  }

  const submitNewBook = (e: any) => {
    e.preventDefault();
    let newBook = newBookForm;
    newBook.status = 'On Backlog';
    newBook.dateCreated = new Date().toISOString();
    dispatch(addBook(newBook as BookStateObject, token));
    window.location.reload(); //history.go(); //TEMPORARY SOLUTION (hide submit new book and reload booklist component)
  }

  const handleSelect = (e: any) => {
    const { value } = e.target;
    setNewBookForm((prev) => ({ ...prev, type: value }));
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