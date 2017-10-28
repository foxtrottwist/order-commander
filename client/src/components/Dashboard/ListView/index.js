import React from 'react';
import styled from 'styled-components';

import ListIndex from './ListIndex';
import List from './List';

const ListBox = styled.div`display: flex;`;

const ListView = props => (
  <ListBox>
    <ListIndex {...props} />
    <List {...props} />
  </ListBox>
);

export default ListView;
