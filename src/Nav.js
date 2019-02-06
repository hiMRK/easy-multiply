import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'bootstrap-4-react';

const Navigation = () => {

  const styledLink = {
    color: 'white'
  };

  return (
    <Nav p='3' dark bg='dark' justifyContent='center'>
      <Nav.Item mx='3'><Link style={styledLink} to='/'>Home</Link></Nav.Item>
      <Nav.Item mx='3'><Link style={styledLink} to='/howto'>How to</Link></Nav.Item>
    </Nav>
  );
};
export default Navigation;