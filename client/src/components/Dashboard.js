import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Hello Dashboard</h2>
      <Link to="/inventory-lists">Inventory Lists</Link>
    </div>
  );
};

export default Dashboard;
