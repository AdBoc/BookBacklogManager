import * as React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.scss'

interface Props {
  handleMenu: () => void
}

const SideDrawer: React.FC<Props> = ({ handleMenu }): JSX.Element => {

  return (
    <div className="SideDrawer" onClick={handleMenu}>
      <ul className="SideDrawer__Links">
        <Link className="link" to='/'><li className="SideDrawer__Links--link">Home</li></Link>
        <Link className="link" to='/backlog'><li className="SideDrawer__Links--link">Backlog</li></Link>
        <Link className="link" to='/login'><li className="SideDrawer__Links--link">Login</li></Link>
        <Link className="link" to='/currentReads'><li className="SideDrawer__Links--link">Current Reads</li></Link>
        <Link className="link" to='/register'><li className="SideDrawer__Links--link">Register</li></Link>
      </ul>
    </div>
  )
}

export default SideDrawer;