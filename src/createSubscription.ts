import { HttpFunction } from "@google-cloud/functions-framework";
import stripe from "./initStripe";

export const createSubscription: HttpFunction = async (req, res) => {
  const { customerId, params = {} } = req.body;
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [
        {
          price: process.env.SUBSCRIPTION_PRICE,
        },
      ],
    }, params);
    res.json(subscription);
  } catch (err) {
    res.status(500).send({ error: "Subscription could not be added" });
  }
};
