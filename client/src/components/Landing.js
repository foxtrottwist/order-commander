import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginHeading = styled.h2`
  text-align: center;
  margin-top: 3rem;
  a {
    text-decoration: underline;
    color: #000;
    font-size: 1.5rem;
  }
`;

const Landing = () => {
  return (
    <div>
      <LoginHeading>
        Welcome to Order Admin, Please <Link to="/login">Login</Link>
      </LoginHeading>
    </div>
  );
};

export default Landing;
