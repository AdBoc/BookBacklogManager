import React, { useState } from 'react';
import { SortingOptions, StoreType } from '../../ts/interfaces/interfaces';
import Select from '../ReusableComponents/Select';
import { sortSelect, statusSelect, typeSelect } from './initialValues';
import BookList from './BooksList/BookList';
import NewBook from './NewBookForm/NewBook';
import { useSelector } from 'react-redux';
import './Backlog.scss';

const BooksList: React.FC = (): JSX.Element => {
  const arrayLength = useSelector((store: StoreType) => store.books.items.length);
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
      <p>Total number of books {arrayLength}</p>
      <BookList sortingOptions={sortingOptions} />
      <button className="BookList__button" onClick={handleNewBook}>Add new book</button>
      {addBook && <NewBook />}
    </div>
  )
}

export default BooksList;
//if in history then you can reread