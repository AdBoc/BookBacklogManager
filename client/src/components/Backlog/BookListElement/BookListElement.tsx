import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookStateObject } from '../../../redux/Books/interfaces';
import { removeBook, downloadBook, uploadBook, removeFile } from '../../../redux/Books/actions';
import { StoreType } from '../../../ts/interfaces/interfaces';
import NewBookForm from '../../ReusableComponents/NewBookForm';
import './BookListElement.scss';

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

  const handleEditMode = () => {
    setEditMode(prev => !prev)
  }

  const deleteFile = () => {
    removeFile(book._id, token);
  }

  return (
    <div className="BookListElement">
      {editMode ?
        (
          <NewBookForm type='edit' book={book} setDisplayStatus={setEditMode} />
        ) : (
          <>
            <p className="display__close" onClick={() => { close(book) }}></p>
            <p className="BookListElement__field">{book.title}</p>
            <p className="BookListElement__field">{book.author}</p>
            <p className="BookListElement__field">Pages: {book.pages}</p>
            <p className="BookListElement__field">Release: {book.year}</p>
            <p className="BookListElement__field">Type: {book.type}</p>
            <p className="BookListElement__field">Status: {book.status}</p>
          </>
        )
      }
      <div className="BookListElement__buttons">
        <button className="BookListElement__buttons__button" onClick={download}>Download</button>
        <button className="BookListElement__buttons__button" onClick={handleEditMode}>Edit</button>
        <button className="BookListElement__buttons__button" onClick={remove}>Remove</button>
        <button className="BookListElement__buttons__button" onClick={deleteFile}>Remove File</button>
        <label className="BookListElement__buttons__button">Upload File<input className="BookListElement__buttons__hidden" type="file" onChange={upload} /></label>
      </div>
    </div>
  )
}

export default BookListElement;
