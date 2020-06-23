import React, { useState } from 'react';
import { sortByTitle, sortByAuthor, sortByPages, sortByYear, sortByDate } from '../../../_helpers/sorting';
import { BookStateObject } from "../../../ts/interfaces/interfaces";

interface IProps {
  bookArray: BookStateObject[];
  sort: string;
}

const BookList: React.FC<IProps> = ({ bookArray, sort }) => {
  const [id, setId] = useState<any>(undefined);

  const handleElement = (e: any) => {
    +(id!) === +(e.target.id) ? setId(undefined) : setId(+(e.target.id));
  }

  const sortArray = () => {
    switch (sort) {
      case "title":
        return sortByTitle();
      case "Author":
        return sortByAuthor();
      case "pages":
        return sortByPages();
      case "year":
        return sortByYear();
      case "new":
        return sortByDate();
      default:
        return undefined;
    }
  }

  return (
    <div className="BookList__list">
      {bookArray.length ? bookArray.sort(sortArray()).map((item, index) => {
        return (
          <div key={index}>
            <ul className="BookList__list__item" id={index.toString()} onClick={handleElement}>
              <li id={index.toString()}>{item.title}</li>
              <li id={index.toString()}>{item.author}</li>
            </ul>
            {index === id ? (
              <div className="BookList__list__details" onClick={handleElement} id={index.toString()}>
                <div id={index.toString()} onClick={handleElement}>{item.title}, {item.author}, release year: {item.year}, pages: {item.pages}, type: {item.type}</div>
                <button>download</button>
                <button>edit</button>
                <button>remove</button>
                <button>upload</button>
                <button>set Status</button>
              </div>
            ) : null}
          </div>
        )
      }) : (<div>Empty</div>)}
    </div>
  )
}

export default BookList;