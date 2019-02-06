import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'bootstrap-4-react';
import './nav.scss';

const Navigation = () => {
  return (
    <Navbar p='3' dark bg='dark'>
      <Navbar.Nav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/test'>How to</Link></li>
      </Navbar.Nav>
    </Navbar>
  );
};
export default Navigation;