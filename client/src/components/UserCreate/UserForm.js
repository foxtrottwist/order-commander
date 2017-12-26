import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';

import { LOGIN_FIELDS } from '../utils/constants';
import {
  FormBox,
  FieldBox,
  ButtonBox,
  Button,
  Error
} from '../utils/sharedStyles';

const ItemField = ({ input, label, meta }) => {
  return (
    <FieldBox>
      <label>{label}</label>
      <input {...input} />
      <Error>{meta.touched && meta.error}</Error>
    </FieldBox>
  );
};

class UserForm extends Component {
  renderFields() {
    return LOGIN_FIELDS.map(({ label, name }) => {
      return (
        <FieldBox key={name}>
          <Field label={label} type="text" name={name} component={ItemField} />
        </FieldBox>
      );
    });
  }

  render() {
    const { createUser, history } = this.props;
    return (
      <FormBox>
        <form
          onSubmit={this.props.handleSubmit(values =>
            createUser(values, history)
          )}
        >
          {this.renderFields()}
          <ButtonBox>
            <Button type="submit" color="#016025">
              Create User
            </Button>
          </ButtonBox>
        </form>
      </FormBox>
    );
  }
}

export default connect(null, actions)(
  reduxForm({ form: 'userForm' })(withRouter(UserForm))
);
