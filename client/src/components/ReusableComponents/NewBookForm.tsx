import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType, NewBookData } from '../../ts/interfaces/interfaces';
import { initialBookState } from '../Backlog/initialValues';
import { addBook } from '../../redux/Books/actions';
import { BookStateObject } from '../../redux/Books/interfaces';

interface IProps {
  type: 'new' | 'edit';
}

const NewBookForm: React.FC<IProps> = () => {
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
    newBook.dateCreated = new Date().toISOString();
    dispatch(addBook(newBook as BookStateObject, token));
    window.location.reload(); //history.go(); //TEMPORARY SOLUTION (hide submit new book and reload booklist component)
  }

  const handleSelect = (e: any) => {
    const { value, name } = e.target;
    setNewBookForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form onSubmit={submitNewBook}>
      <input type="text" placeholder="title" name="title" onChange={handleChange} required />
      <input type="text" placeholder="author" name="author" onChange={handleChange} required />
      <input type="text" placeholder="year" name="year" onChange={handleChange} />
      <input type="text" placeholder="pages" name="pages" onChange={handleChange} />
      <select name="status" onChange={handleSelect}>
        <option value="OnBacklog" placeholder="On Backlog">On Backlog</option>
        <option value="CurrentlyReading" placeholder="Currently Reading">Currently Reading</option>
        <option value="Suspended" placeholder="Suspended">Suspended</option>
        <option value="History" placeholder="History">History</option>
      </select>
      <select name="type" onChange={handleSelect}>
        <option value="Fiction" placeholder="Fiction">Fiction</option>
        <option value="Nonfiction" placeholder="Nonfiction">Nonfiction</option>
        <option value="Science" placeholder="Science">Science</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default NewBookForm