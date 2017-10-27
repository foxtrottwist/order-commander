import React from 'react';
import { InnerListBox } from './utils/sharedStyles';
import styled from 'styled-components';

const ListInfo = styled.div`
  border-radius: 1%;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ListIndex = ({ lists, selectList }) => (
  <InnerListBox>
    {lists.map(({ title, _id, list, dateCreated }) => (
      <ListInfo key={_id} onClick={() => selectList(list)}>
        <h4>{title}</h4>
        <p>Contains {list.length} items</p>
      </ListInfo>
    ))}
  </InnerListBox>
);

export default ListIndex;
