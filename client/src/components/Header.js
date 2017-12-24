import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderBox>
      <h1>Order Admin</h1>
    </HeaderBox>
  );
};

export default Header;
