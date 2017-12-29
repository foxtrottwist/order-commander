import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';

import { LOGIN_FIELDS } from '../utils/constants';
import { FormBox, FieldBox, ButtonBox, Button } from '../utils/sharedStyles';
import InputField from '../InputField';

class LoginForm extends Component {
  renderFields() {
    return LOGIN_FIELDS.map(({ label, name, type }) => {
      return (
        <FieldBox key={name}>
          <Field label={label} type={type} name={name} component={InputField} />
        </FieldBox>
      );
    });
  }

  render() {
    const { login, history } = this.props;
    return (
      <FormBox>
        <form
          onSubmit={this.props.handleSubmit(values => login(values, history))}
        >
          {this.renderFields()}
          <ButtonBox>
            <Button type="submit" color="#016025">
              Login
            </Button>
          </ButtonBox>
        </form>
      </FormBox>
    );
  }
}

export default connect(null, actions)(
  reduxForm({ form: 'loginForm' })(withRouter(LoginForm))
);
