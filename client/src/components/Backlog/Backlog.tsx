import React, { useState } from 'react';
import { BookStateObject, SortingOptions } from '../../ts/interfaces/interfaces';
import Select from '../ReusableComponents/Select';
import { sortSelect, statusSelect, typeSelect } from './initialValues';
import BookList from './BooksList/BookList';
import NewBookForm from './NewBookForm/NewBookForm';
import { useSelector } from 'react-redux';
import './Backlog.scss';

const BooksList = (): JSX.Element => {
  const bookArray = useSelector((store: BookStateObject[]) => store);
  const [addBook, setAddBook] = useState<boolean>(false);
  const [sortingOptions, setSortingOptions] = useState<SortingOptions>({ sort: 'new', status: 'All', type: 'All' })

  const handleNewBook = () => {
    setAddBook(prev => !prev);
  }

  return (
    <div className="BookList">
      <p className="BookList__title">BooksList</p>
      <Select name="sort" options={sortSelect} setValue={setSortingOptions} />
      <Select name="status" options={statusSelect} setValue={setSortingOptions} />
      <Select name="type" options={typeSelect} setValue={setSortingOptions} />
      <p>Total number of books {bookArray.length}</p>
      <BookList sortingOptions={sortingOptions} />
      <button className="BookList__button" onClick={handleNewBook}>Add new book</button>
      {addBook && <NewBookForm />}
    </div>
  )
}

export default BooksList;
//if in history then you can reread