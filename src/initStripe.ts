import Stripe from "stripe";
const stripeSecretKey = (process.env.STRIPE_SECRET_KEY as string)

const apiKey = ():string => {
  if(process.env.NODE_ENV === 'Production') {
    return stripeSecretKey
  }
  import('dotenv')
    .then(env => env.config())
    .catch(error => console.error(error))
  return stripeSecretKey
}

const stripe = new Stripe(
  apiKey(),
  {
    apiVersion: "2020-08-27",
  },
);

export default stripe;
