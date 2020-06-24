import React, { useState } from 'react';
import './Backlog.scss';
import { initialArray } from '../../_helpers/dummyData';
import { BookStateObject, SortingOptions } from '../../ts/interfaces/interfaces';
import Select from '../ReusableComponents/Select';
import Form from '../ReusableComponents/Form';
import { initialBookState, sortSelect, statusSelect, typeSelect } from './initialValues';
import BookList from './BooksList/BookList';

const BooksList = (): JSX.Element => {
  const [addBook, setAddBook] = useState<boolean>(false);
  const [newBook, setNewBook] = useState<BookStateObject>(initialBookState);
  const [bookArray, setBookArray] = useState<BookStateObject[]>(initialArray);
  const [sortingOptions, setSortingOptions] = useState<SortingOptions>({ sort: 'new', status: 'All', type: 'All' })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewBook(prev => ({ ...prev, [name]: value }));
  }

  const handleNewBook = () => {
    setAddBook(prev => !prev);
  }

  const submitNewBook = (e: any) => {
    e.preventDefault();
    let currentBook = newBook;
    currentBook.status = 'On Backlog';
    currentBook.dateCreated = new Date().toISOString();
    setBookArray([...bookArray, currentBook]);
    setNewBook(initialBookState);
  }

  return (
    <div className="BookList">
      <p className="BookList__title">BooksList</p>
      <Select name="sort" options={sortSelect} setValue={setSortingOptions} />
      <Select name="status" options={statusSelect} setValue={setSortingOptions} />
      <Select name="type" options={typeSelect} setValue={setSortingOptions} />
      <p>Total number of books {bookArray.length}</p>
      <BookList bookArray={bookArray} sortingOptions={sortingOptions} />
      <button className="BookList__button" onClick={handleNewBook}>Add new book</button>
      {addBook && <Form object={newBook} submit={submitNewBook} handleChange={handleChange} />}
    </div>
  )
}

export default BooksList;
//if in history then you can reread