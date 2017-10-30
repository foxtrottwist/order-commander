import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 30%;
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <Link to="/inventory-lists">Dashboard</Link>
      <Link to="/inventory-lists/add">
        <span style={{ color: '#016025' }}>&#x2b;</span>Create New List
      </Link>
    </Nav>
  );
};

export default NavBar;
