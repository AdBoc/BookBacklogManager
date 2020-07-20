import React from 'react';
import { useState } from 'react';

import SideDrawer from './SideDrawer/SideDrawer';
import TopBar from './TopBar/TopBar';

const NavBar = (): JSX.Element => {
  const [navStatus, setNavStatus] = useState(false);

  const handleMenu = (): void => {
    setNavStatus(prev => !prev);
  }

  return (
    <nav>
      <TopBar handleMenu={handleMenu} />
      {navStatus && <SideDrawer handleMenu={handleMenu} />}
    </nav>
  )
}

export default NavBar;