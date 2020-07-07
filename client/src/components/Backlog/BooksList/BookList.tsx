import React, { useState, useEffect } from 'react';
import { sortByTitle, sortByAuthor, sortByPages, sortByYear, sortByDate } from '../../../_helpers/sorting';
import { SortingOptions, StoreType, NewBookData } from "../../../ts/interfaces/interfaces";
import BookListElement from '../BookListElement/BookListElement';
import { useSelector, useDispatch } from 'react-redux';
import { requestBooks } from '../../../redux/Books/actions';
import { BookStateObject } from '../../../redux/Books/interfaces';

interface IProps {
  sortingOptions: SortingOptions;
}

const newBookData = { title: "", author: "", year: "", pages: "", type: "", status: "", dateCreated: "" }; //zawiera inormacje na temat obecnie kliknietej pozycji, informacje te sa przeekazywane dalej do book list element do wyswietlenia

const BookList: React.FC<IProps> = ({ sortingOptions }) => {

  const bookArray = useSelector((store: StoreType) => store.books.items);
  const [isElementVisibile, setIsElementVisibile] = useState<boolean>(false);
  const [bookObjectInfo, setBookObjectInfo] = useState<NewBookData>(newBookData);
  const dispatch = useDispatch();
  const token = useSelector((store: StoreType) => store.user.token);

  useEffect(() => {
    dispatch(requestBooks(token));
  }, [])

  const handleClick = (item: NewBookData) => {
    isElementVisibile ? setBookObjectInfo(newBookData) : setBookObjectInfo(item); //data sent to element showing book
    setIsElementVisibile((prev) => !prev);
  }

  console.log(bookObjectInfo);

  const sortArray = () => {
    switch (sortingOptions.sort) {
      case "title":
        return sortByTitle();
      case "author":
        return sortByAuthor();
      case "pages":
        return sortByPages();
      case "year":
        return sortByYear();
      case "new":
        return sortByDate();
    }
  }

  const sortedAndFilteredArray = (): BookStateObject[] => {
    let sortedArray = bookArray;
    if (sortingOptions.status !== 'All') {
      sortedArray = sortedArray.filter((item) => { return item.status === sortingOptions.status });
    }
    if (sortingOptions.type !== 'All') {
      sortedArray = sortedArray.filter((item) => { return item.type === sortingOptions.type });
    }
    sortedArray.sort(sortArray());
    return sortedArray;
  }

  return (
    <div>
      <div className="BookList__list">
        {bookArray.length ? sortedAndFilteredArray().map((item) => {
          return (
            <div key={item._id}>
              <ul className="BookList__list__item" id={item._id} onClick={() => { handleClick(item) }}>
                <li id={item._id}>{item.title}</li>
                <li id={item._id}>{item.author}</li>
              </ul>
            </div>
          )
        }) : (<div>Backlog list is empty or loading</div>)}
      </div>
      {isElementVisibile && <BookListElement book={bookObjectInfo} close={handleClick} />}
    </div>
  )
}

export default BookList;