import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import DemoUser from '../DemoUser';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="session-links">
        <NavLink to="/host">Host</NavLink>
        <NavLink to="/listings">Listings</NavLink>
        <NavLink to={`/bookings/${sessionUser.id}`}>My Bookings</NavLink>
        <ProfileButton user={sessionUser} />

      </div>
    );
  } else {
    sessionLinks = (
      <div className="session-links">
        <DemoUser/>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <div className="nav-bar-parent">
      <ul className="nav-bar-container">
        <li>
          <NavLink className="home-navlink" exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
