import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';

import { USER_FIELDS } from '../utils/constants';
import { FormBox, FieldBox, ButtonBox, Button } from '../utils/sharedStyles';
import InputField from '../InputField';

class UserForm extends Component {
  renderFields() {
    return USER_FIELDS.map(({ label, name, type }) => {
      return (
        <FieldBox key={name}>
          <Field label={label} type={type} name={name} component={InputField} />
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
            <Button
              onClick={() => this.props.history.push('/dashboard')}
              type="button"
              color="#b60009"
            >
              Cancel
            </Button>
            <Button type="submit" color="#016025">
              Submit
            </Button>
          </ButtonBox>
        </form>
      </FormBox>
    );
  }
}

function validate(values) {
  const errors = {};
  USER_FIELDS.map(({ name, errorMessage }) => {
    if (!values[name]) {
      errors[name] = errorMessage;
    }
    return errors;
  });

  return errors;
}

export default connect(null, actions)(
  reduxForm({ validate, form: 'userForm' })(withRouter(UserForm))
);
