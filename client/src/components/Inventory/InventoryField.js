import React from 'react';
import styled from 'styled-components';

const ErrorStyle = styled.div`color: #b60009;`;

const InventoryField = ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <ErrorStyle>{meta.touched && meta.error}</ErrorStyle>
    </div>
  );
};
export default InventoryField;
