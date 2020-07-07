import React from 'react';
import { useSelector } from 'react-redux';
import { BookStateObject } from '../../redux/Books/interfaces';
import { StoreType } from '../../ts/interfaces/interfaces';

const CurrentReads: React.FC = () => {
  const bookArray = useSelector((store: StoreType) => store.books);

  return (
    <>
      <div>Current Reads</div>
      {bookArray ? (bookArray.filter((item: BookStateObject) => { return item.status === 'Currently Reading' }).map((item: BookStateObject) => {
        return (
          <div key={item.id}>
            <ul className="BookList__list__item" id={item.id}>
              <li id={item.id}>{item.title}</li>
              <li id={item.id}>{item.author}</li>
            </ul>
          </div>)
      })) : (
          <div>aa</div>
        )
      }
    </>
  )
}

export default CurrentReads;
//make special array with only currently read books to avoid sorting it every time?
