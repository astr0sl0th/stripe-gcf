import { HttpFunction } from "@google-cloud/functions-framework";
import stripe from "./initStripe";

// TODO: Delete multiple subscriptions at once?
export const cancelSubscription: HttpFunction = async (req, res) => {
  const { subscriptionId, params = {} } = req.body;
  try {
    const canceledSubscription = await stripe.subscriptions.del(
      subscriptionId,
      { ...params },
    );
    res.json(canceledSubscription);
  } catch (err) {
    res.status(500).json({ error: "Could not cancel subscription." });
  }
};
