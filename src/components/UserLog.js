import React from 'react';
import { NavLink } from 'react-router-dom';

const UserLog = ({ isLoggedIn }) => {
  return (isLoggedIn ?
    <>
      <NavLink to={'/profile'} key={'profile'}
        className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
      >
        Profile
      </NavLink >
      <NavLink to={'/logout'} key={'logout'}
        className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
      >
        Logout
      </NavLink >
    </> :
    <NavLink to={'/login'} key={'login'}
      className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
    >
      Login
    </NavLink>)
}

export default UserLog
