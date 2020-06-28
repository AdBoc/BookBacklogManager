import React, { useState } from 'react';
import { sortByTitle, sortByAuthor, sortByPages, sortByYear, sortByDate } from '../../../_helpers/sorting';
import { BookStateObject, SortingOptions } from "../../../ts/interfaces/interfaces";
import BookListElement from '../BookListElement/BookListElement';
import { useSelector } from 'react-redux';

interface IProps {
  sortingOptions: SortingOptions;
}

const initialObjectState = { id: "", title: "", author: "", year: "", pages: "", type: "", status: "", dateCreated: "" }; //zawiera inormacje na temat obecnie kliknietej pozycji, informacje te sa przeekazywane dalej do book list element do wyswietlenia

const BookList: React.FC<IProps> = ({ sortingOptions }) => {
  const bookArray = useSelector((store: BookStateObject[]) => store);
  const [isElementVisibile, setIsElementVisibile] = useState<boolean>(false);
  const [bookObjectInfo, setBookObjectInfo] = useState<BookStateObject>(initialObjectState);

  const handleClick = (item: BookStateObject) => {
    isElementVisibile ? setBookObjectInfo(initialObjectState) : setBookObjectInfo(item);
    setIsElementVisibile((prev) => !prev);
  }

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
            <div key={item.id}>
              <ul className="BookList__list__item" id={item.id} onClick={() => { handleClick(item) }}>
                <li id={item.id}>{item.title}</li>
                <li id={item.id}>{item.author}</li>
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