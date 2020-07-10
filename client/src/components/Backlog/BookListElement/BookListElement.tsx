import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookStateObject } from '../../../redux/Books/interfaces';
import { removeBook, downloadBook, uploadBook, removeFile } from '../../../redux/Books/actions';
import { StoreType } from '../../../ts/interfaces/interfaces';

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

  const edit = () => {
    setEditMode(prev => !prev)
    // editBook(book._id, token);
  }

  const deleteFile = () => {
    removeFile(book._id, token);
  }

  return (
    <>
      {editMode ?
        (
          <>
            <label><input type="text" placeholder={book.title} />Title</label>
            <label><input type="text" placeholder={book.author} />Author</label>
            <label><input type="text" placeholder={book.pages} />Pages</label>
            <label><input type="text" placeholder={book.year} />Year</label>
            <label><input type="text" placeholder={book.type} />Type</label>
            <label><input type="text" placeholder={book.status} />Status</label>
          </>
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
      <button onClick={edit}>edit</button>
      <button onClick={remove}>remove</button>
      <button onClick={closeElement}>close</button>
      <button onClick={deleteFile}>remove File</button>
      <input type="file" onChange={upload} />
    </>
  )
}

export default BookListElement;
//edit you can click on edit button and than click on fields of component and change them.

// return (
//   <div className="login">
//     {authStatus.isLogged ?
//       (
//         <Redirect to='/' />
//       )
//       :
//       (
//         <div className="login__loginForm">
//           <p className="login__mainText">Login</p>
//           <LoginForm handleSubmit={handleSubmit} fields={fields} validationErrors={validationErrors} handleFields={handleFields} />
//           <p className="login__register">Not registered? <Link to={'/register'}>Create an account</Link></p>
//         </div>
//       )
//     }
//   </div >
// )
