import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 50%;
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
      <Link to="/take-inventory">Take Inventory</Link>
      <Link to="/order-pilot">Order Pilot</Link>
    </Nav>
  );
};

export default NavBar;
