import React, { useState } from 'react';
import { SortingOptions, StoreType } from '../../ts/interfaces/interfaces';
import Select from '../ReusableComponents/Select';
import { sortSelect, statusSelect, typeSelect } from './initialValues';
import BookList from './BooksList/BookList';
import { useSelector } from 'react-redux';
import './Backlog.scss';
import NewBookForm from '../ReusableComponents/NewBookForm';

const BooksList: React.FC = (): JSX.Element => {
  const arrayLength = useSelector((store: StoreType) => store.books.items.length);
  const [addBook, setAddBook] = useState<boolean>(false);
  const [sortingOptions, setSortingOptions] = useState<SortingOptions>({ sort: 'new', status: 'All', type: 'All' })

  const handleNewBook = () => {
    setAddBook(prev => !prev);
  }

  return (
    <div className="BookList">
      <div className='BookList__sortingOptions'>
        <Select name="sort" options={sortSelect} setValue={setSortingOptions} />
        <Select name="status" options={statusSelect} setValue={setSortingOptions} />
        <Select name="type" options={typeSelect} setValue={setSortingOptions} />
      </div>
      <BookList sortingOptions={sortingOptions} />
      {arrayLength !== 0 && <p className="BookList__bookAmount">Total number of books: {arrayLength}</p>}
      <button className="BookList__button" onClick={handleNewBook}>Add new book</button>
      {addBook && <NewBookForm type='new' setDisplayStatus={setAddBook} />}
    </div>
  )
}

export default BooksList;
