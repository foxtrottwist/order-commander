import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 65%;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.7rem;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">Dashboard</Link>
      <Link to="/inventory">Take Inventory</Link>
      <Link to="">Order Pilot</Link>
    </Nav>
  );
};

export default NavBar;
