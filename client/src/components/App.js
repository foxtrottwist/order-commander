import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import Landing from './Landing';
import Login from './Login';
import Dashboard from './Dashboard';
import UserCreate from './UserCreate';
import InventoryAdd from './InventoryAdd';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <div>
          <Header />
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/users/add" component={UserCreate} />
          <Route path="/inventory-lists/add" component={InventoryAdd} />
        </div>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
