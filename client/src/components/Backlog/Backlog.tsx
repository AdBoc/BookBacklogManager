import React from 'react';
// import AddNewBacklog from './AddNewBacklog/AddNewBacklog';
import './Backlog.scss';
import BooksList from './BooksList/BooksList';

const Backlog = () => {
  // const [newBacklog, setNewBacklog] = useState(false);

  // const addBacklog = () => {
  //   setNewBacklog(prev => !prev);
  // }

  return (
    <div className="Backlog">
      {/* <button onClick={addBacklog}>Add new backlog</button> */}
      {/* {newBacklog && <AddNewBacklog />} */}
      <BooksList />
    </div >
  )
}

export default Backlog;
//ADD NEW BACKLOG
//SHOW OTHER BACKLOGS 