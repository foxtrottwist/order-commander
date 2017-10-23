import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => (
  <div style={{ textAlign: 'center', marginTop: '1rem' }}>
    <Link
      to="/inventory-lists/add"
      style={{
        textDecoration: 'none',
        color: '#000',
        fontSize: '1.5rem'
      }}
    >
      <span style={{ color: '#016025' }}>&#x2b;</span>Create New List
    </Link>
  </div>
);

export default Inventory;
