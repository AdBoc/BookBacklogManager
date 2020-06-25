import React, { useState } from 'react';
import { BookStateObject } from '../../../ts/interfaces/interfaces';
import { initialBookState } from '../initialValues';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  setBookArray: React.Dispatch<React.SetStateAction<BookStateObject[]>>;
  bookArray: BookStateObject[]
}

const NewBookForm: React.FC<IProps> = ({ setBookArray, bookArray }) => {
  const [newBook, setNewBook] = useState<BookStateObject>(initialBookState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewBook(prev => ({ ...prev, [name]: value }));
  }

  const submitNewBook = (e: any) => {
    e.preventDefault();
    let currentBook = newBook;
    currentBook.status = 'On Backlog';
    currentBook.dateCreated = new Date().toISOString();
    currentBook.id = uuidv4();
    setBookArray([...bookArray, currentBook]);
    setNewBook(initialBookState);
  }

  const handleSelect = (e: any) => {
    const { value } = e.target;
    setNewBook(prev => ({ ...prev, type: value }));
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