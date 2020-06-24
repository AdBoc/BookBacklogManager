import React, { useState } from 'react';
import { sortByTitle, sortByAuthor, sortByPages, sortByYear, sortByDate } from '../../../_helpers/sorting';
import { BookStateObject, SortingOptions } from "../../../ts/interfaces/interfaces";

interface IProps {
  bookArray: BookStateObject[];
  sortingOptions: SortingOptions;
}

const BookList: React.FC<IProps> = ({ bookArray, sortingOptions }) => {
  const [id, setId] = useState<number>(-1);

  const handleElement = (e: any) => {
    +(id) === +(e.target.id) ? setId(-1) : setId(+(e.target.id)); //jesli stare id jest rowne nowemu id to ustawia sie na undefined jesli jest inne to id jest zmieniane na e.target.id, router moze byc lepszy niz to 
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

    sortedArray.sort(sortArray());
    if (sortingOptions.status !== 'All') {
      sortedArray = sortedArray.filter((item: BookStateObject) => { return item.status === sortingOptions.status });
    }
    if (sortingOptions.type !== 'All') {
      sortedArray = sortedArray.filter((item: BookStateObject) => { return item.type === sortingOptions.type });
    }

    return sortedArray;
  }

  return (
    <div className="BookList__list">
      {bookArray.length ? sortedAndFilteredArray().map((item, index) => {
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
      }) : (<div>Backlog list is empty or loading</div>)}
    </div>
  )
}

export default BookList;