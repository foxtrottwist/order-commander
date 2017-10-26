import React from 'react';
import { InnerListBox } from './utils/sharedStyles';

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
