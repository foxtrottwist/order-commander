import React from 'react';
import styled from 'styled-components';

const InnerListBox = styled.div`
  width: 16rem;
  height: 30rem;
  overflow: auto;
`;

const ListView = ({ list }) => (
  <InnerListBox>
    {list.map(({ inventoryItem, _id }) => <h5 key={_id}>{inventoryItem}</h5>)}
  </InnerListBox>
);

export default ListView;
