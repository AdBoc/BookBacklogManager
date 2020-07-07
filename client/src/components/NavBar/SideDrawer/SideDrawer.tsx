import * as React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.scss'
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../redux/User/interfaces';
import { StoreType } from '../../../ts/interfaces/interfaces';

interface Props {
  handleMenu: () => void
}

const SideDrawer: React.FC<Props> = ({ handleMenu }): JSX.Element => {
  const loggedIn = useSelector((store: StoreType) => store.user.isLogged)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: LOGOUT });
  }

  return (
    <div className="SideDrawer" onClick={handleMenu}>
      <ul className="SideDrawer__Links">
        <Link className="link" to='/'><li className="SideDrawer__Links--link">Home</li></Link>
        <Link className="link" to='/backlog'><li className="SideDrawer__Links--link">Backlog</li></Link>
        <Link className="link" to='/currentReads'><li className="SideDrawer__Links--link">Current Reads</li></Link>
        <Link className="link" to='/customization'><li className="SideDrawer__Links--link">Customization</li></Link>
        {!loggedIn && <Link className="link" to='/login'><li className="SideDrawer__Links--link">Login</li></Link>}
        {loggedIn && <button onClick={handleClick}>Logout</button>}
      </ul>
    </div>
  )
}

export default SideDrawer;
//Home can be icon