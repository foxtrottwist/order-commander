import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ListView from './ListView';
import * as actions from '../../actions';

const InventoryDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InventoryActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 30%;
  a {
    text-decoration: none;
    color: #000;
    font-size: 1.7rem;
  }
`;

class TakeInventory extends Component {
  state = { selectedList: [] };

  componentWillMount() {
    this.props.fetchInventoryLists();
  }

  render() {
    return (
      <div>
        <InventoryDashboard>
          <ListView
            lists={this.props.lists}
            selectList={list => this.setState({ selectedList: list })}
            list={this.state.selectedList}
          />
        </InventoryDashboard>
        <InventoryActions>
          <Link to="/inventory-lists/add">
            <span style={{ color: '#016025' }}>&#x2b;</span>Create New List
          </Link>
          <Link to="/inventory-lists/add">
            <span style={{ color: '#b60009' }}>&#x2613;</span>Edit List
          </Link>
        </InventoryActions>
      </div>
    );
  }
}

function mapStateToProps({ lists }) {
  return { lists };
}

export default connect(mapStateToProps, actions)(TakeInventory);
