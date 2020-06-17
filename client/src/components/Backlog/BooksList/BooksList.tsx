import React, { useState } from 'react';
import './BooksList.scss'

interface BookStateObject {
  title: string;
  author: string;
  year: string;
  pages: string;
  type: string;
}

const BooksList = (): JSX.Element => {

  const initialBookState = {
    title: '',
    author: '',
    year: '',
    pages: '',
    type: ''
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

  const [addBook, setAddBook] = useState(false);
  const [newBook, setNewBook] = useState<BookStateObject>(initialBookState);
  const [bookArray, setBookArray] = useState<any>(INITIALARRAY);

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
      <div className="BookList__list">
        {bookArray.map((item, index) => {
          return (
            <div className="BookList__list__item" key={index}>
              <li>
                {item.title},
                {item.author},
                {item.year},
                {item.pages},
                {item.type}
              </li>
              <div>download</div>
              <div>edit</div>
              <div>remove</div>
              <div>upload</div>
            </div>
          )
        }
        )}
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
//status currently hidden, currently readed
//: React.ChangeEvent<HTMLInputElement> React.FormEvent<HTMLFormElement>









// import React, { useState } from 'react';

// interface BookStateObject {
//   title: string;
//   author: string;
//   year: string;
//   pages: string;
//   type: string;
// }

// const BooksList = (): JSX.Element => {

//   const initialBookState = {
//     title: '',
//     author: '',
//     year: '',
//     pages: '',
//     type: ''
//   }

//   const [addBook, setAddBook] = useState(false);
//   const [newBook, setNewBook] = useState<BookStateObject>(initialBookState);
//   const [bookArray, setBookArray] = useState<BookStateObject[] | []>([]);

//   const addNewBook = () => {
//     setAddBook(prev => !prev);
//   }

//   const handleChange = (e) => { //: React.ChangeEvent<HTMLInputElement> React.FormEvent<HTMLFormElement>
//     e.preventDefault();
//     const { name, value } = e.target;
//     setNewBook(prev => ({ ...prev, [name]: value }));
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setBookArray([...bookArray, newBook]);
//     setNewBook(initialBookState);
//   }

//   const myArr = ['a', 'b', 'c'];

//   return (
//     <div>
//       <div className="BookList">BooksList</div>
//       <div>Sort List By /author /title /length /year</div>
//       <button onClick={addNewBook}>Add new book</button>
//       {addBook &&
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="title" value={newBook.title} placeholder="title" onChange={handleChange} required />
//           <input type="text" name="author" value={newBook.author} placeholder="author" onChange={handleChange} required />
//           <input type="text" name="year" value={newBook.year} placeholder="year" onChange={handleChange} required />
//           <input type="text" name="pages" value={newBook.pages} placeholder="pages" onChange={handleChange} required />
//           <input type="text" name="type" value={newBook.type} placeholder="type" onChange={handleChange} required />
//           <input type="submit" value="Submit" />
//         </form>
//       }
//       <div>
//         {bookArray.map((item: BookStateObject[]) => console.log(item))}
//       </div>
//     </div>
//   )
// }
// // {bookArray.map((item. index) => (<li key={index}>{item}</li>))}
// //<li>{item}</li>
// export default BooksList;

// //type fiction nonfiction
// //download book upload book