import { HttpFunction } from "@google-cloud/functions-framework";
import stripe from "./initStripe";

export const createSubscription: HttpFunction = async (req, res) => {
  const { customer, source } = req.body;
  await stripe.customers.createSource(customer, { source });
  const { id } = await stripe.subscriptions.create({
    customer,
    items: [
      {
        price: process.env.NODE_ENV === "production"
          ? process.env.PRICE
          : "price_1JByO2AR5ga0LsAGw8L7bHgr",
      },
    ],
  });
  res.json({ id });
};
