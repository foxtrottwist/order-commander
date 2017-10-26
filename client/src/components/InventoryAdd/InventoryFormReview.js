import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from './utils/styles';
import FIELDS from './utils/constants';
import * as actions from '../../actions';

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 21.5rem;
  max-height: 21.5rem;
  width: 20rem;
  margin: 0 auto;
  padding: 1%;
  text-align: center;

  label {
    font-size: 1.2rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FieldBox = styled.div`
  margin: 0 auto;
  width: 20rem;
`;

const InventoryFormReview = ({ onCancel, formValues, createList, history }) => {
  const fieldValues = FIELDS.map(({ label, name }) => {
    return (
      <FieldBox key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </FieldBox>
    );
  });
  return (
    <ReviewBox>
      <h4>Please review your entries</h4>
      {fieldValues}
      <ButtonBox>
        <Button type="button" color="#b60009" onClick={onCancel}>
          Back &larr;
        </Button>
        <Button
          type="button"
          color="#016025"
          onClick={() => createList(formValues, history)}
        >
          Submit
        </Button>
      </ButtonBox>
    </ReviewBox>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.inventoryForm.values };
}

export default connect(mapStateToProps, actions)(
  withRouter(InventoryFormReview)
);
