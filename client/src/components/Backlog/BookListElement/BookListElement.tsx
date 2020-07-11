import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookStateObject } from '../../../redux/Books/interfaces';
import { removeBook, downloadBook, uploadBook, removeFile } from '../../../redux/Books/actions';
import { StoreType } from '../../../ts/interfaces/interfaces';
import NewBookForm from '../../ReusableComponents/NewBookForm';

interface IProps {
  book: BookStateObject;
  close: (item: BookStateObject) => void
}

const BookListElement: React.FC<IProps> = ({ book, close }) => {
  const dispatch = useDispatch();
  const token = useSelector((store: StoreType) => store.user.token);
  const [editMode, setEditMode] = useState(false);

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

  const handleEditMode = () => {
    setEditMode(prev => !prev)
  }

  const deleteFile = () => {
    removeFile(book._id, token);
  }

  return (
    <>
      {editMode ?
        (
          <NewBookForm type='edit' book={book} />
        ) : (
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
      <button onClick={download}>download</button>
      <button onClick={handleEditMode}>edit</button>
      <button onClick={remove}>remove</button>
      <button onClick={closeElement}>close</button>
      <button onClick={deleteFile}>remove File</button>
      <input type="file" onChange={upload} />
    </>
  )
}

export default BookListElement;
