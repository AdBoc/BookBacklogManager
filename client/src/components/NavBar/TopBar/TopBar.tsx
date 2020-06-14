import * as React from 'react'
import { Link } from 'react-router-dom';
import './TopBar.scss';

interface Props {
  handleMenu: () => void // handleMenu(e: React.SyntheticEvent): void;
}

const TopBar: React.FC<Props> = ({ handleMenu }): JSX.Element => {
  return (
    <ul className="NavBar">
      <Link className='NavBar__item' to='/'>Home</Link>
      <button className='NavBar__item' onClick={handleMenu}>
        <div className="toggleButton__line" />
        <div className="toggleButton__line" />
        <div className="toggleButton__line" />
      </button>
    </ul>
  )
}

export default TopBar;