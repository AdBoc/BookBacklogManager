import React, { useState } from 'react';
import { StoreType } from '../../../ts/interfaces/interfaces';
import { initialBookState } from '../initialValues';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../../redux/Books/actions';

const NewBookForm: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((store: StoreType) => store.user.token);
  const [newBookForm, setNewBookForm] = useState<any>(initialBookState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewBookForm((prev: any) => ({ ...prev, [name]: value }));
  }

  const submitNewBook = (e: any) => {
    e.preventDefault();
    let newBook = newBookForm;
    newBook.status = 'On Backlog';
    newBook.dateCreated = new Date().toISOString();
    dispatch(addBook(newBook, token))
  }

  const handleSelect = (e: any) => {
    const { value } = e.target;
    setNewBookForm((prev: any) => ({ ...prev, type: value }));
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