import { HttpFunction } from "@google-cloud/functions-framework";
import stripe from "./initStripe";

const cancelSubscription: HttpFunction = async (req, res) => {
  const { id } = req.body;
  try {
    const customer = await stripe.customers.retrieve(id, {
      expand: ["subscriptions"],
    });
    (customer as any).subscriptions.data.forEach(
      async ({ id }: { id: string }) => {
        Promise.resolve();
        await stripe.subscriptions.del(id);
      },
    );
    return res.json(customer);
  } catch (err) {
    return res.status(500).json({ error: "Could not cancel subscription." });
  }
};

export { cancelSubscription };
