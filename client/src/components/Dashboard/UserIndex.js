import React from 'react';

import { InnerListBox } from '../utils/sharedStyles';

const UserIndex = ({ users }) => {
  return (
    <InnerListBox>
      {users.map(({ _id, email, password, isAdmin }) => (
        <div key={_id}>
          <h4>{email}</h4>
        </div>
      ))}
    </InnerListBox>
  );
};

export default UserIndex;
