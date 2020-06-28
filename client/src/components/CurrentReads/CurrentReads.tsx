import React from 'react';
import { useSelector } from 'react-redux';

const CurrentReads = () => {
  const bookArray = useSelector((store: any) => store);

  return (
    <>
      <div>Current Reads</div>
      {bookArray ? (bookArray.filter((item: any) => { return item.status === 'Currently Reading' }).map((item: any) => {
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
