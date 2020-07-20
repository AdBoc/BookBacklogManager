import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../redux/User/interfaces';
import { StoreType } from '../../../ts/interfaces/interfaces';
import './SideDrawer.scss';

interface Props {
  handleMenu: () => void
}

const SideDrawer: React.FC<Props> = ({ handleMenu }): JSX.Element => {
  const loggedIn = useSelector((store: StoreType) => store.user.isLogged)
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div className="SideDrawer" onClick={handleMenu}>
      <ul className="SideDrawer__links">
        <Link className="SideDrawer__links--link" to='/'><li>Home</li></Link>
        {!loggedIn && <>
          <Link className="SideDrawer__links--link" to='/login'><li>Login</li></Link>
          <Link className="SideDrawer__links--link" to='/register'><li>Sign up</li></Link>
        </>
        }
        {loggedIn && <>
          <Link className="SideDrawer__links--link" to='/backlog'><li>Backlog</li></Link>
          <Link className="SideDrawer__links--link" to='/currentReads'><li>Current Reads</li></Link>
          <Link className="SideDrawer__links--link" to='/customization'><li>Customization</li></Link>
          <p className="SideDrawer__links--link" onClick={handleClick}>Logout</p>
        </>
        }
      </ul>
    </div>
  )
}

export default SideDrawer;
