import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import InventoryForm from './InventoryForm';
import InventoryFormReview from './InventoryFormReview';

class Inventory extends Component {
  state = { showFormReview: false };

  renderForms() {
    if (this.state.showFormReview) {
      return (
        <InventoryFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <InventoryForm
        onListSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderForms()}</div>;
  }
}

export default reduxForm({
  form: 'inventoryForm'
})(Inventory);
