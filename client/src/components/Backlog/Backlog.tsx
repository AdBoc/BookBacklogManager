import React, { useState } from 'react';
import AddNewBacklog from './AddNewBacklog/AddNewBacklog';

const Backlog = () => {
  const [newBacklog, setNewBacklog] = useState(false);

  const addBacklog = () => {
    setNewBacklog(prev => !prev);
  }

  return (
    <div>
      <h1>Manage Backlog</h1>
      <button onClick={addBacklog}>Add new backlog</button>
      {newBacklog && <AddNewBacklog />}
    </div >
  )
}

export default Backlog;
//ADD NEW BACKLOG 
//SHOW OTHER BACKLOGS 