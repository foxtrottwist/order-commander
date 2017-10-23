import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import InventoryNew from './Inventory/InventoryNew';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <div>
          <Header />
          <NavBar />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/inventory-lists/add" component={InventoryNew} />
        </div>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
