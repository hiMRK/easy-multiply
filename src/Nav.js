import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/test">Users</Link>
      </li>
    </ul>
  );
};

export default Nav;