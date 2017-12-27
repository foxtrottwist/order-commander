import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import * as actions from '../actions';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 35%;
  a {
    cursor: pointer;
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
  }
`;

const NavBar = ({ authenticated, logout, history }) => {
  return !authenticated ? null : (
    <Nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users/add">Add User</Link>
      <Link to="/inventory-lists/add">
        <span style={{ color: '#016025' }}>&#x2b;</span>Create New List
      </Link>
      <a onClick={() => logout(history)}>Logout</a>
    </Nav>
  );
};

function mapStateToProps({ authenticated }) {
  return { authenticated };
}

export default connect(mapStateToProps, actions)(withRouter(NavBar));
