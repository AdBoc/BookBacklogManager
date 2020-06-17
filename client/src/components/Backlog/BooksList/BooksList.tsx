import React, { useState } from 'react';
import './BooksList.scss'

interface BookStateObject {
  title: string;
  author: string;
  year: string;
  pages: string;
  type: string;
}

const INITIALARRAY = [
  {
    title: 'Zbrodnia i Kara',
    author: 'Fidor Dostojewski',
    year: '1866',
    pages: '504',
    type: 'fiction'
  },
  {
    title: 'aa',
    author: 'bb',
    year: 'cc',
    pages: 'dd',
    type: 'ee'
  },
  {
    title: 'aa',
    author: 'bb',
    year: 'cc',
    pages: 'dd',
    type: 'ee'
  }
]

const BooksList = (): JSX.Element => {

  const initialBookState = {
    title: '',
    author: '',
    year: '',
    pages: '',
    type: ''
  }

  const [addBook, setAddBook] = useState(false);
  const [newBook, setNewBook] = useState<BookStateObject>(initialBookState);
  const [bookArray, setBookArray] = useState<any>(INITIALARRAY);
  const [id, setId] = useState<any>(undefined);

  const addNewBook = () => {
    setAddBook(prev => !prev);
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNewBook(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookArray([...bookArray, newBook]);
    setNewBook(initialBookState);
  }

  const handleElement = (e) => {
    console.log(e.target.id);
    +(id) === +(e.target.id) ? setId(undefined) : setId(+(e.target.id));
  }

  const edit = () => {
    console.log('edit');
  }

  return (
    <div className="BookList">
      <div className="BookList__title">BooksList</div>
      <label className="BookList__label">Sort By:
        <select className="BookList__sortBy">
          <option value="Author">Author</option>
          <option value="Title">Title</option>
          <option value="Length">Length</option>
          <option value="Year">Year</option>
          <option value="Newly Added">Newly Added</option>
        </select>
      </label>
      <label className="BookList__label">Status:
        <select className="BookList__sortBy">
          <option value="All">All</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Suspended">Suspended</option>
          <option value="History">History</option>
        </select>
      </label>
      <label className="BookList__label">Type:
        <select className="BookList__sortBy">
          <option value="All">All</option>
          <option value="NonFiction">NonFiction</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
        </select>
      </label>
      <div>Total amount of books:</div>
      <div className="BookList__list">
        {bookArray.length ? bookArray.map((item, index) => {
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
                  <button onClick={edit}>edit</button>
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
      <button className="BookList__button" onClick={addNewBook}>Add new book</button>
      {addBook &&
        <form className="BookList__form" onSubmit={handleSubmit}>
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
// download edit remove upload
//index jest liczba, a id jest string, uzywam + do konwersji 
// jak id undefined to CHUJ, jak index liczba to gites majonez