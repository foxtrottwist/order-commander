import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from './utils/styles';
import InventoryField from './InventoryField';
import FIELDS from './utils/constants';

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

const FieldBox = styled.div`margin: 0 auto;`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

class InventoryForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => {
      return (
        <FieldBox key={name}>
          <Field
            label={label}
            type="text"
            name={name}
            component={InventoryField}
          />
        </FieldBox>
      );
    });
  }

  render() {
    return (
      <FormBox>
        <form onSubmit={this.props.handleSubmit(this.props.onListSubmit)}>
          {this.renderFields()}
          <ButtonBox>
            <Link
              to="/take-inventory"
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
