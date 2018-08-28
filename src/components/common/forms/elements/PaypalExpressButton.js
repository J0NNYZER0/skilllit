import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

class PaypalExpressButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    //const {cart, address} = this.props;
    let client = {
      sandbox:    'AZqN1lXfLtdQ62GHM5cw8B1PFzNo9fbax4_nAf5R6v8wQREg9bxafbWoSUawCQ_uLQ4DMbfXvCQB507q',
      production: 'xxxxxxxxx'
    },
    style = {
      label: 'generic',
      size: 'responsive',
      color: 'black',
      shape: 'rect',
      tagline: false
    },
    env = 'sandbox', // Or 'sandbox',
    commit = true, // Show a 'Pay Now' button
    payment = (data, actions) => actions.payment.create({
      payment: {
        /*payer: {
          payer_info:{
             email:"bogus1234asdf@bogus1234.com",
             first_name:"Bogus",
             middle_name:"Bogus",
             last_name:"Merchant",
             country_code:"US",
             shipping_address:{
                recipient_name:"Bogus Merchant",
                line1:"1 Main St",
                city:"San Jose",
                state:"CA",
                postal_code:"95131",
                country_code:"US"
             }
           }
         },*/
        transactions: [
          {
              amount: { total: '0.01', currency: 'USD' }
          }
        ]
      }
    }),
    onAuthorize = (data, actions) => actions.payment.execute().then(() => {
      return actions.payment.get().then(paymentDetails => {

        console.log('payment-details', paymentDetails);
        let removedTitle = document.getElementsByClassName('page__title'),
          removed = document.getElementsByClassName('shop_checkout');
        removedTitle[0].parentNode.removeChild(removedTitle[0]);
        removed[0].parentNode.removeChild(removed[0]);
        removed[0].parentNode.removeChild(removed[0]);
        let node = document.createElement('DIV'),
          section = document.getElementsByTagName('section');
        node.innerHTML = '<h1 class="page__title">Thank you</h1><ul class="shop_checkout"><li><h2>Your payment is complete</h2></li><li><span class="icon__payment_success" /></li><li><a class="button" href="/order/fakeid">Track Your Order!</a></li></ul>',
        section[0].appendChild(node);
        //window.alert('Payment Complete!');
      });
    }),
    PaypalButton = paypal.Button.driver('react', { React, ReactDOM });

    return(
      <PaypalButton
        client={client}
        style={style}
        env={env}
        payment={payment}
        commit={commit}
        onAuthorize={onAuthorize} />
    );
  }
}

PaypalExpressButton.propTypes = {
  cart: PropTypes.array,
  address: PropTypes.object
};

export default PaypalExpressButton;
