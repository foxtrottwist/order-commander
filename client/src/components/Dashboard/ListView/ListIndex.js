import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../actions';

import { InnerListBox } from '../../utils/sharedStyles';

const ListHeader = styled.div`
  margin-bottom: 1.2rem;
  display: inline-block;
  width: 13rem;

  p + p {
    margin-bottom: 0;
  }
`;

const ItemDetail = styled.div`
  border-radius: 1%;
  background-color: ${({ list, selectedList }) =>
    list === selectedList ? 'rgba(0, 0, 0, 0.1)' : 'none'};
  border-radius: 2%;
  box-sizing: border-box;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
  h4 {
    margin-bottom: 0.65rem;
  }
`;

const ListIndex = ({
  lists,
  onSelectList,
  selectedList,
  deleteInventoryList,
  history
}) => (
  <InnerListBox>
    {lists.map(({ title, _id, list, dateCreated }) => (
      <ListHeader key={_id}>
        <ItemDetail
          onClick={() => onSelectList(list)}
          list={list}
          selectedList={selectedList}
        >
          <h4>{title}</h4>
          <p>Created on: {new Date(dateCreated).toLocaleDateString()}</p>
          <p>Contains {list.length} items</p>
        </ItemDetail>
        <button onClick={() => deleteInventoryList(_id, history)} type="button">
          delete
        </button>
      </ListHeader>
    ))}
  </InnerListBox>
);

export default connect(null, actions)(withRouter(ListIndex));
