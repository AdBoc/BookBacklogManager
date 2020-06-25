import React from 'react';
import { BookStateObject } from "../../../ts/interfaces/interfaces";

interface IProps {
  book: BookStateObject
}

const BookListElement: React.FC<IProps> = ({ book }) => {

  return (
    <>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>Pages: {book.pages}</div>
      <div>Release: {book.year}</div>
      <div>Type: {book.type}</div>
      <div>Status: {book.status}</div>
    </>
  )
}

export default BookListElement;