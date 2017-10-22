import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Dashboard from "./Dashboard";
import InventoryLists from "./InventoryLists";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/inventory-lists" component={InventoryLists} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
