import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookStateObject } from '../../../redux/Books/interfaces';
import { removeBook, downloadBook, uploadBook, removeFile, editBook } from '../../../redux/Books/actions';
import { StoreType, NewBookData } from '../../../ts/interfaces/interfaces';

interface IProps {
  book: BookStateObject;
  close: (item: BookStateObject) => void
}

const BookListElement: React.FC<IProps> = ({ book, close }) => {
  const [newBookForm, setNewBookForm] = useState<NewBookData>({
    title: "",
    author: "",
    year: "",
    pages: "",
    type: "",
    status: "",
    dateCreated: "",
  });
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




  //-----------------------------------------------------------------------------




  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewBookForm((prev) => ({ ...prev, [name]: value }));
  }

  const submitNewBook = (e: any) => {
    e.preventDefault();
    editBook(book, newBookForm, token);
    // window.location.reload(); //history.go(); //TEMPORARY SOLUTION (hide submit new book and reload booklist component)
  }

  const handleSelect = (e: any) => {
    const { value, name } = e.target;
    setNewBookForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      {editMode ?
        (
          <form onSubmit={submitNewBook}>
            <input type="text" placeholder={book.title} name="title" onChange={handleChange} />
            <input type="text" placeholder={book.author} name="author" onChange={handleChange} />
            <input type="text" placeholder={book.year} name="year" onChange={handleChange} />
            <input type="text" placeholder={book.pages} name="pages" onChange={handleChange} />
            <select name="status" onChange={handleSelect}>
              <option disabled defaultValue={book.status}>{book.status}</option>
              <option value="OnBacklog" placeholder="On Backlog">On Backlog</option>
              <option value="CurrentlyReading" placeholder="Currently Reading">Currently Reading</option>
              <option value="Suspended" placeholder="Suspended">Suspended</option>
              <option value="History" placeholder="History">History</option>
            </select>
            <select name="type" onChange={handleSelect}>
              <option disabled defaultValue={book.type}>{book.type}</option>
              <option value="Fiction" placeholder="Fiction">Fiction</option>
              <option value="Nonfiction" placeholder="Nonfiction">Nonfiction</option>
              <option value="Science" placeholder="Science">Science</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
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
