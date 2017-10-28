import React from 'react';
import { InnerListBox } from './utils/sharedStyles';
import styled from 'styled-components';

const ListHeader = styled.div`
  background-color: ${({ list, selectedList }) =>
    list === selectedList ? 'rgba(0, 0, 0, 0.1)' : 'none'};
  border-radius: 1%;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ListIndex = ({ lists, onSelectList, selectedList }) => (
  <InnerListBox>
    {lists.map(({ title, _id, list, dateCreated }) => (
      <ListHeader
        key={_id}
        onClick={() => onSelectList(list)}
        list={list}
        selectedList={selectedList}
      >
        <h4>{title}</h4>
        <p>Contains {list.length} items</p>
      </ListHeader>
    ))}
  </InnerListBox>
);

export default ListIndex;
