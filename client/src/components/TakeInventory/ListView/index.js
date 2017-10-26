import React from 'react';
import styled from 'styled-components';

import ListIndex from './ListIndex';
import List from './List';

const ListBox = styled.div`display: flex;`;

const ListView = ({ lists, selectList, list }) => (
  <ListBox>
    <ListIndex lists={lists} selectList={selectList} />
    <List list={list} />
  </ListBox>
);

export default ListView;
