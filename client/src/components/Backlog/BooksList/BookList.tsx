import React, { useState } from 'react';
import { sortByTitle, sortByAuthor, sortByPages, sortByYear, sortByDate } from '../../../_helpers/sorting';
import { BookStateObject, SortingOptions } from "../../../ts/interfaces/interfaces";
import BookListElement from '../BookListElement/BookListElement';

interface IProps {
  bookArray: BookStateObject[];
  sortingOptions: SortingOptions;
}

const BookList: React.FC<IProps> = ({ bookArray, sortingOptions }) => {
  const [isElementVisibile, setIsElementVisibile] = useState<boolean>(false);
  const [bookObjectInfo, setBookObjectInfo] = useState<any>({})

  const handleClick = (item: BookStateObject) => {
    setIsElementVisibile((prev) => !prev);
    setBookObjectInfo(item);
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
      {isElementVisibile && <BookListElement book={bookObjectInfo} />}
    </div>
  )
}

export default BookList;