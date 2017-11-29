import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from './utils/sharedStyles';
import { FIELDS, TITLES } from './utils/constants';

const FormBox = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20rem;
    width: 20rem;
    padding: 1%;
  }
  select {
    display: block;
    height: 1.5rem;
    width: 18rem;
    border: 0.001rem solid #000;
  }
  input {
    display: block;
    height: 1.5rem;
    width: 18rem;
    border: 0.001rem solid #000;
  }
  label {
    font-size: 1.2rem;
  }
`;

const FieldBox = styled.div`
  height: 7rem;
  margin: 0 auto;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Error = styled.div`
  color: #b60009;
  max-width: 18rem;
`;

const TitleField = ({ input, label, meta }) => {
  return (
    <FieldBox>
      <label>{label}</label>
      <select {...input}>
        <option selected="selected" />
        {TITLES.map(({ value, title }) => (
          <option value={value}>{title}</option>
        ))}
      </select>
      <Error>{meta.touched && meta.error}</Error>
    </FieldBox>
  );
};

const ItemField = ({ input, label, meta }) => {
  return (
    <FieldBox>
      <label>{label}</label>
      <input {...input} />
      <Error>{meta.touched && meta.error}</Error>
    </FieldBox>
  );
};

class InventoryForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => {
      return (
        <FieldBox key={name}>
          <Field label={label} type="text" name={name} component={ItemField} />
        </FieldBox>
      );
    });
  }

  render() {
    return (
      <FormBox>
        <form onSubmit={this.props.handleSubmit(this.props.onListSubmit)}>
          <FieldBox>
            <Field
              label="List List"
              type="text"
              name="title"
              component={TitleField}
            />
          </FieldBox>
          <FieldBox>
            <Field
              label="List Items"
              type="text"
              name="list"
              component={ItemField}
            />
          </FieldBox>
          <ButtonBox>
            <Link
              to="/inventory-lists"
              style={{
                textDecoration: 'none',
                color: '#b60009',
                fontSize: '1.5rem'
              }}
            >
              Cancel
            </Link>
            <Button type="submit" color="#016025">
              Review &rarr;
            </Button>
          </ButtonBox>
        </form>
      </FormBox>
    );
  }
}

function validate(values) {
  const errors = {};
  FIELDS.map(({ name, errorMessage }) => {
    if (!values[name]) {
      errors[name] = errorMessage;
    }
    return errors;
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'inventoryForm',
  destroyOnUnmount: false
})(InventoryForm);
