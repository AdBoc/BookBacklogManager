import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BookStateObject } from '../../redux/Books/interfaces';
import { StoreType } from '../../ts/interfaces/interfaces';
import { sendCurrentPage, sendDeadline, sendStatus } from '../../redux/Books/actions';

const CurrentReads: React.FC = () => {
  const bookArray = useSelector((store: StoreType) => store.books.items);
  const token = useSelector((store: StoreType) => store.user.token);

  const [bookId, setBookId] = useState<string | null>(null);

  const [editDeadline, setEditDeadline] = useState(false);
  const [editPages, setEditPages] = useState(false);

  const [deadline, setDeadline] = useState<null | string>(null);
  const [currentPage, setCurrentPage] = useState<null | string>(null);
  const [currentBookStatus, setCurrentBookStatus] = useState<null | boolean>(null);

  const handleDeadline = () => {
    if (deadline && bookId) sendDeadline(deadline, bookId, token);
  };
  const handlePages = () => {
    if (currentPage && bookId) sendCurrentPage(currentPage, bookId, token);
  };
  const handleStatus = () => {
    setCurrentBookStatus(prev => !prev); //do poprawy, wytarczy ze request nie pojdzie a na froncie sie zmieni
    console.log((!currentBookStatus).toString());
    if (bookId && currentBookStatus !== null) sendStatus((!currentBookStatus).toString(), bookId, token);
  };

  const dateDiff = (date1: Date, date2: Date) => {
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
  }

  return (
    <>
      <div>Current Reads</div>
      {bookArray ? (bookArray.filter((item: BookStateObject) => { return item.status === 'CurrentlyReading' }).map((item: BookStateObject) => {
        return (
          <div key={item._id} onMouseEnter={() => { setBookId(item._id); setCurrentBookStatus(item.currentReadsStatus.status); }}>
            <ul className="BookList__list__item" id={item._id}>
              <li>{item.title}</li>
              <li>{item.author}</li>
              <label><input type="checkbox" onChange={handleStatus} defaultChecked={item.currentReadsStatus.status} />Set deadline</label>
              {
                item.currentReadsStatus.status && <>
                  <p>current page: {item.currentReadsStatus.pages}/{item.pages}</p><button onClick={() => { setEditPages(prev => !prev) }}>edit</button>
                  {
                    editPages && <>
                      <input type="number" placeholder='insert current page' onChange={(e) => setCurrentPage(e.target.value)} />
                      <button onClick={handlePages}>Send</button>
                    </>
                  }
                  <p>deadline: {item.currentReadsStatus.date} ({dateDiff(new Date(), new Date(item.currentReadsStatus.date as string))} days) </p><button onClick={() => { setEditDeadline(prev => !prev) }}>edit</button>
                  {
                    editDeadline && <>
                      <input type="date" onChange={(e) => setDeadline(e.target.value)} />
                      <button onClick={handleDeadline}>Send</button>
                    </>
                  }
                </>
              }
            </ul>
          </div>)
      })) : (
          <div>No books with currently reading status</div>
        )
      }
    </>
  )
}

export default CurrentReads;
//make special array with only currently read books to avoid sorting it every time?
//too much data in bookList? 

// user zaznacza deadline (na kiedy chce miec przeczytana dana pozycje) i moze uzupelniac obecna liczbe przezytanych stron 
// nie mozna wybrac daty z przeszlosci, 
