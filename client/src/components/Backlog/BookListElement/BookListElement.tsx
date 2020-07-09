import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookStateObject } from '../../../redux/Books/interfaces';
import { removeBook, downloadBook, uploadBook, editBook } from '../../../redux/Books/actions';
import { StoreType } from '../../../ts/interfaces/interfaces';

interface IProps {
  book: BookStateObject;
  close: (item: BookStateObject) => void
}

const BookListElement: React.FC<IProps> = ({ book, close }) => {
  const dispatch = useDispatch();
  const token = useSelector((store: StoreType) => store.user.token);

  const download = () => {
    dispatch(downloadBook(book._id, token));
  };

  const remove = () => {
    dispatch(removeBook(book._id, token));
    close(book);
  };

  const upload = (e: any) => {
    const dataForm = new FormData();
    dataForm.append(book._id, e.target.files[0]);
    uploadBook(token, dataForm);
  }

  const closeElement = () => {
    close(book);
  };

  const edit = () => {
    editBook(token);
  }

  return (
    <>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>Pages: {book.pages}</div>
      <div>Release: {book.year}</div>
      <div>Type: {book.type}</div>
      <div>Status: {book.status}</div>
      <button onClick={download}>download</button>
      <button onClick={edit}>edit</button>
      <button onClick={remove}>remove</button>
      <input type="file" onChange={upload} />
      <button onClick={closeElement}>close</button>
    </>
  )
}

export default BookListElement;
//edit you can click on edit button and than click on fields of component and change them.