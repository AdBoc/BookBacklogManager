import React, { useState } from 'react';
import { sortByTitle, sortByAuthor, sortByPages, sortByYear, sortByDate } from '../../../_helpers/sorting';
import { SortingOptions, StoreType } from "../../../ts/interfaces/interfaces";
import BookListElement from '../BookListElement/BookListElement';
import { useSelector } from 'react-redux';
import { BookStateObject } from '../../../redux/Books/interfaces';

interface IProps {
  sortingOptions: SortingOptions;
}

const BookList: React.FC<IProps> = ({ sortingOptions }) => {
  const selectedBookData: BookStateObject = { _id: "", title: "", author: "", year: "", pages: "", type: "", status: "", dateCreated: "", currentReadsStatus: { status: false, date: "", pages: "" } }; //has info about currently clicked position that is send to bookListElement
  const bookArray = useSelector((store: StoreType) => store.books.items);
  const [isElementVisibile, setIsElementVisibile] = useState<boolean>(false);
  const [bookObjectInfo, setBookObjectInfo] = useState<BookStateObject>(selectedBookData);

  const handleClick = (item: BookStateObject) => {// argumnt of function BookStateObject | null, 
    isElementVisibile ? setBookObjectInfo(selectedBookData) : setBookObjectInfo(item); //data sent to element showing book
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