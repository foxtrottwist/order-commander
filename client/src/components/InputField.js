import React from 'react';

import { FieldBox, Error } from './utils/sharedStyles';

const InputField = ({ input, label, meta, type }) => {
  return (
    <FieldBox>
      <label>{label}</label>
      <input type={type} {...input} />
      <Error>{meta.touched && meta.error}</Error>
    </FieldBox>
  );
};

export default InputField;
