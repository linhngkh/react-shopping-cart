import { loadStripe, Stripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    loadStripe(process.env.REACT_STRIPE_KEY_API ?? "");
  }
  return stripePromise;
};

export default function Checkout() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: process.env.CLIENT_SECRET,
  };

  return <Elements stripe={stripePromise} options={options}></Elements>;
}
