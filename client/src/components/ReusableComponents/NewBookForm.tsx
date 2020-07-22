import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType, NewBookData } from '../../ts/interfaces/interfaces';
import { addBook, editBook } from '../../redux/Books/actions';
import { BookStateObject } from '../../redux/Books/interfaces';
import { useFormValidation } from '../../hooks/FormValidation';
import './styles.scss';

interface IProps {
  type: 'new' | 'edit';
  setDisplayStatus: React.Dispatch<React.SetStateAction<boolean>>;
  book?: BookStateObject;
}

const NewBookForm: React.FC<IProps> = ({ type, book, setDisplayStatus }) => {

  const newBookForm = {
    title: "",
    author: "",
    year: "",
    pages: "",
    ...book ? { type: book.type, status: book.status } : { type: "Fiction", status: "OnBacklog" }
  };

  const dispatch = useDispatch();
  const token = useSelector((store: StoreType) => store.user.token);
  const { handleChange, handleSelect, submitValidity, data } = useFormValidation(newBookForm);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (submitValidity()) {
      let newBook: NewBookData = data.formValues;
      newBook.currentReadsStatus = { status: "false" };
      newBook.dateCreated = new Date().toISOString();
      type === 'new' ? dispatch(addBook(newBook, token)) : editBook(book!, newBook, token);
      console.log('submitting');
    }
  };

  return (
    <div className="display">
      <div className="display__close" onClick={() => { setDisplayStatus(prev => !prev) }}>
      </div>
      <form className="newBookForm" onSubmit={handleSubmit}>
        <input
          className={data.formErrors.title ? "newBookForm__input--error" : "newBookForm__input"}
          type="text"
          placeholder={type === 'new' ? "Title" : book?.title}
          name="title"
          onChange={handleChange}
        />
        {data.formErrors.title && <p className="error">{data.formErrors.title}</p>}
        <input
          className={data.formErrors.author ? "newBookForm__input--error" : "newBookForm__input"}
          type="text"
          placeholder={type === 'new' ? "Author" : book?.author}
          name="author"
          onChange={handleChange}
        />
        {data.formErrors.author && <p className="error">{data.formErrors.author}</p>}
        <input
          className={data.formErrors.year ? "newBookForm__input--error" : "newBookForm__input"}
          type="number"
          placeholder={type === 'new' ? "Year" : book?.year}
          name="year"
          onChange={handleChange}
        />
        {data.formErrors.year && <p className="error">{data.formErrors.year}</p>}
        <input
          className={data.formErrors.pages ? "newBookForm__input--error" : "newBookForm__input"}
          placeholder={type === 'new' ? "Pages" : book?.pages}
          name="pages"
          onChange={handleChange}
        />
        {data.formErrors.pages && <p className="error">{data.formErrors.pages}</p>}
        <select className="newBookForm__input" name="status" value={data.formValues.status} onChange={handleSelect}>
          <option value="OnBacklog" placeholder="On Backlog">On Backlog</option>
          <option value="CurrentlyReading" placeholder="Currently Reading">Currently Reading</option>
          <option value="Suspended" placeholder="Suspended">Suspended</option>
          <option value="History" placeholder="History">History</option>
        </select>
        <select className="newBookForm__input" name="type" value={data.formValues.type} onChange={handleSelect}>
          <option value="Fiction" placeholder="Fiction">Fiction</option>
          <option value="Nonfiction" placeholder="Nonfiction">Nonfiction</option>
          <option value="Science" placeholder="Science">Science</option>
        </select>
        <input className="newBookForm__submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NewBookForm;

//bp przy on change w select nie zmienia sie pobierany z reduxa book.type, zmienia sie tylko data.formValues.form