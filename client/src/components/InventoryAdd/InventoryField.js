import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  color: #b60009;
  max-width: 18rem;
`;

const InventoryField = ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <Error>{meta.touched && meta.error}</Error>
    </div>
  );
};
export default InventoryField;
