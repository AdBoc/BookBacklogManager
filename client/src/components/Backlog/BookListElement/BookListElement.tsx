import React from 'react';
import { StoreType, NewBookData } from "../../../ts/interfaces/interfaces";
import { useSelector, useDispatch } from 'react-redux';
import { BookStateObject } from '../../../redux/Books/interfaces';
// import { removeBook } from '../../../redux/Books/actions';

interface IProps {
  book: NewBookData;
  close: (item: NewBookData) => void
}

const BookListElement: React.FC<IProps> = ({ book, close }) => {
  // const bookArray = useSelector((store: StoreType) => store.books);
  // const dispatch = useDispatch();

  const remove = () => {
    // dispatch(removeBook(bookArray.indexOf(book)));
    close(book);
  };

  const closeElement = () => {
    close(book);
  }

  return (
    <>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>Pages: {book.pages}</div>
      <div>Release: {book.year}</div>
      <div>Type: {book.type}</div>
      <div>Status: {book.status}</div>
      <button>download</button>
      <button>edit</button>
      <button onClick={remove}>remove</button>
      <button>upload</button>
      <button onClick={closeElement}>close</button>
    </>
  )
}

export default BookListElement;
//edit you can click on edit button and than click on fields of component and change them.