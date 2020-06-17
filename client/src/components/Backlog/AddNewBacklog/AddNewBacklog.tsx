import * as React from 'react';

const AddNewBacklog = () => {
  return (
    <div>
      AddNewBacklog
      <label>Backlog type
        <select className="home__form__select" name="language">
          <option value="books">Books</option>
          <option value="movies">Movies</option>
          <option value="games">Games</option>
          <option value="custom">Custom</option>
        </select>
      </label>
      <button>Make changes</button>
    </div>
  )
}

export default AddNewBacklog;