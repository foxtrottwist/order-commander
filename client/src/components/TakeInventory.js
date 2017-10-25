import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

class TakeInventory extends Component {
  componentWillMount() {
    this.props.fetchInventoryLists();
  }

  render() {
    console.log(this.props.lists);
    return (
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
  }
}

function mapStateToProps({ lists }) {
  return { lists };
}

export default connect(mapStateToProps, actions)(TakeInventory);
