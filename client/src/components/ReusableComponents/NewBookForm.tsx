import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType, NewBookData } from '../../ts/interfaces/interfaces';
import { initialBookState } from '../Backlog/initialValues';
import { addBook, editBook } from '../../redux/Books/actions';
import { BookStateObject } from '../../redux/Books/interfaces';

interface IProps {
  type: 'new' | 'edit';
  book?: BookStateObject;
}

const NewBookForm: React.FC<IProps> = ({ type, book }) => {
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
    if (!newBook.status)
      newBook.status = "OnBacklog";
    if (!newBook.type)
      newBook.type = "Fiction";
    newBook.dateCreated = new Date().toISOString();
    type === 'new' ? dispatch(addBook(newBook as BookStateObject, token)) : editBook(book!, newBookForm, token);
    window.location.reload(); //history.go(); //TEMPORARY SOLUTION (hide submit new book and reload booklist component)
  }

  const handleSelect = (e: any) => {
    const { value, name } = e.target;
    setNewBookForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      {type === 'new' ?
        (
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
        ) : (
          <form onSubmit={submitNewBook} >
            <input type="text" placeholder={book!.title} name="title" onChange={handleChange} />
            <input type="text" placeholder={book!.author} name="author" onChange={handleChange} />
            <input type="text" placeholder={book!.year} name="year" onChange={handleChange} />
            <input type="text" placeholder={book!.pages} name="pages" onChange={handleChange} />
            <select name="status" onChange={handleSelect}>
              <option disabled defaultValue={book!.status}>{book!.status}</option>
              <option value="OnBacklog" placeholder="On Backlog">On Backlog</option>
              <option value="CurrentlyReading" placeholder="Currently Reading">Currently Reading</option>
              <option value="Suspended" placeholder="Suspended">Suspended</option>
              <option value="History" placeholder="History">History</option>
            </select>
            <select name="type" onChange={handleSelect}>
              <option disabled defaultValue={book!.type}>{book!.type}</option>
              <option value="Fiction" placeholder="Fiction">Fiction</option>
              <option value="Nonfiction" placeholder="Nonfiction">Nonfiction</option>
              <option value="Science" placeholder="Science">Science</option>
            </select>
            <input type="submit" value="Submit" />
          </form >
        )
      }
    </div>
  )
}

export default NewBookForm