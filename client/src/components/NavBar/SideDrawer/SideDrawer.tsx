import * as React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.scss'

interface Props {
  handleMenu: () => void
}

const SideDrawer: React.FC<Props> = ({ handleMenu }): JSX.Element => {

  return (
    <div className="SideDrawer" onClick={handleMenu}>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/backlog'><li>Backlog</li></Link>
        <Link to='/login'><li>Login</li></Link>
      </ul>
    </div>
  )
}

export default SideDrawer;