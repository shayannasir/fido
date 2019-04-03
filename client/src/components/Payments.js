import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        currency="USD"
        name="Emaily"
        description="$5 for 5 Emaily credits."
        panelLabel="Pay "
      >
        <button className="btn waves-effect z-depth-3 lighten-3 ">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
