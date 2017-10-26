import React from 'react';
import styled from 'styled-components';

const InnerListBox = styled.div`
  width: 16rem;
  height: 30rem;
  overflow: auto;
`;

const ListIndex = ({ lists, selectList }) => (
  <InnerListBox>
    {lists.map(({ title, _id, list, dateCreated }) => (
      <div key={_id} onClick={() => selectList(list)}>
        <h4>{title}</h4>
        <p>Contains {list.length} items</p>
      </div>
    ))}
  </InnerListBox>
);

export default ListIndex;
