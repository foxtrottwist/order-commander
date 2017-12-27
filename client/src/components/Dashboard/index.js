import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import ListView from './ListView';
import * as actions from '../../actions';

const DashboardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Dashboard extends Component {
  state = { selectedList: [] };

  componentWillMount() {
    this.props.fetchInventoryLists(this.props.history);
  }

  render() {
    return (
      <div style={{ marginTop: '1.7rem' }}>
        <DashboardBox>
          {!this.props ? null : (
            <ListView
              lists={this.props.inventoryLists}
              onSelectList={list => this.setState({ selectedList: list })}
              selectedList={this.state.selectedList}
            />
          )}
        </DashboardBox>
      </div>
    );
  }
}

function mapStateToProps({ inventoryLists }) {
  return { inventoryLists };
}

export default connect(mapStateToProps, actions)(withRouter(Dashboard));
