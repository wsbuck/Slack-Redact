import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

function SignUp(props: any) {
  async function submit(ev: any) {
    let { token } = await props.stripe.createToken({ name: "Name "})
    const chargeUrl = "https://us-central1-slack-redact.cloudfunctions.net/charge";
    let response = await fetch(chargeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(token.id),
    });
    if (response.ok) {
      console.log('ok');
    }
  }

  return (
    <div className='checkout'>
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button onClick={submit}>Purchase</button>
    </div>
  );
}

export default injectStripe(SignUp);
