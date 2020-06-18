import React, { useState } from 'react';
import './BooksList.scss';
import { sortByTitle, sortByAuthor, sortByYear, sortByPages } from '../../../_helpers/sorting';
import { initialArray } from '../../../_helpers/dummyData';
import { BookStateObject } from '../../../ts/interfaces/interfaces';
import Select from '../../ReusableComponents/Select';
import { initialBookState, sortSelect, statusSelect, typeSelect } from './initialValues';

const BooksList = (): JSX.Element => {
  const [addBook, setAddBook] = useState(false);
  const [newBook, setNewBook] = useState<BookStateObject>(initialBookState);
  const [bookArray, setBookArray] = useState<any>(initialArray);
  const [id, setId] = useState<any>(undefined);
  const [sort, setSortBy] = useState<any>('Title');
  const [status, setStatus] = useState<any>('All');
  const [type, setType] = useState<any>('All');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prev => ({ ...prev, [name]: value }));
  }

  const submitNewBook = (e) => {
    e.preventDefault();
    let date = new Date().toISOString();
    let currentBook = newBook;
    currentBook.status = 'On Backlog';
    currentBook.dateCreated = date;
    setBookArray([...bookArray, currentBook]);
    setNewBook(initialBookState);
  }

  const handleElement = (e) => {
    +(id) === +(e.target.id) ? setId(undefined) : setId(+(e.target.id));
  }

  return (
    <div className="BookList">
      <p className="BookList__title">BooksList</p>
      <Select name="sort by" options={sortSelect} setValue={setSortBy} />
      <Select name="status" options={statusSelect} setValue={setStatus} />
      <Select name="type" options={typeSelect} setValue={setType} />
      <p>Total amount of books:</p>
      <div className="BookList__list">
        {bookArray.length ? bookArray.sort(sortByTitle()).map((item, index) => {
          return (
            <div key={index}>
              <ul className="BookList__list__item" id={index} onClick={handleElement}>
                <li id={index}>{item.title}</li>
                <li id={index}>{item.author}</li>
              </ul>
              {index === id ? (
                <div className="BookList__list__details" onClick={handleElement} id={index}>
                  <div id={index} onClick={handleElement}>{item.title}, {item.author}, release year: {item.year}, pages: {item.pages}, type: {item.type}</div>
                  <button>download</button>
                  <button>edit</button>
                  <button>remove</button>
                  <button>upload</button>
                  <button>set Status</button>
                </div>
              ) : null}
            </div>
          )
        }
        ) : (<div>Empty</div>)}
      </div>
      <button className="BookList__button" onClick={() => { setAddBook(prev => !prev) }}>Add new book</button>
      {addBook &&
        <form className="BookList__form" onSubmit={submitNewBook}>
          <input className="BookList__form__input" type="text" name="title" value={newBook.title} placeholder="title" onChange={handleChange} required />
          <input className="BookList__form__input" type="text" name="author" value={newBook.author} placeholder="author" onChange={handleChange} required />
          <input className="BookList__form__input" type="text" name="year" value={newBook.year} placeholder="year" onChange={handleChange} required />
          <input className="BookList__form__input" type="text" name="pages" value={newBook.pages} placeholder="pages" onChange={handleChange} required />
          <input className="BookList__form__input" type="text" name="type" value={newBook.type} placeholder="type" onChange={handleChange} required />
          <input className="BookList__form__submit" type="submit" value="Submit" />
        </form>
      }
    </div>
  )
}

export default BooksList;
//if in history then you can reread