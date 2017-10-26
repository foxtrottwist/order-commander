import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import OrderPilot from './OrderPilot';
import TakeInventory from './TakeInventory';
import InventoryAdd from './InventoryAdd';

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
          <Route path="/order-pilot" component={OrderPilot} />
          <Route path="/take-inventory" component={TakeInventory} />
          <Route path="/inventory-lists/add" component={InventoryAdd} />
        </div>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
