import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookStateObject } from '../../../redux/Books/interfaces';
import { removeBook } from '../../../redux/Books/actions';
import { StoreType } from '../../../ts/interfaces/interfaces';

interface IProps {
  book: BookStateObject;
  close: (item: BookStateObject) => void
}

const BookListElement: React.FC<IProps> = ({ book, close }) => {
  const dispatch = useDispatch();
  const token = useSelector((store: StoreType) => store.user.token);

  const remove = () => {
    dispatch(removeBook(book._id, token));
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