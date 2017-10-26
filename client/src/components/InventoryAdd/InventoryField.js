import React from 'react';
import styled from 'styled-components';

const FieldBox = styled.div`height: 7rem;`;

const Error = styled.div`
  color: #b60009;
  max-width: 18rem;
`;

const InventoryField = ({ input, label, meta }) => {
  return (
    <FieldBox>
      <label>{label}</label>
      <input {...input} />
      <Error>{meta.touched && meta.error}</Error>
    </FieldBox>
  );
};
export default InventoryField;
