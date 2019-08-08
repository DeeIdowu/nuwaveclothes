import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  //price has to be in cents for stripe process, to process:
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_dstNh7Brk7AU4jBCr90YmTs800yULhFqMR";
  const onToken = token => {
    //used to display process of payment
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      //properties for the eheckout refer to react-stripe-checkout:
      label="Pay now"
      name="NuWaves Clothing"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
