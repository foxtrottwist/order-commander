import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    this.props.fetchInventoryLists();
  }

  render() {
    return (
      <div style={{ marginTop: '1.7rem' }}>
        <DashboardBox>
          <ListView
            lists={this.props.lists}
            selectList={list => this.setState({ selectedList: list })}
            list={this.state.selectedList}
          />
        </DashboardBox>
      </div>
    );
  }
}

function mapStateToProps({ lists }) {
  return { lists };
}

export default connect(mapStateToProps, actions)(Dashboard);
