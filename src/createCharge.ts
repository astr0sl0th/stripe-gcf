import { HttpFunction } from "@google-cloud/functions-framework";
import stripe from "./initStripe";

export const createCharge: HttpFunction = async (req, res) => {
  const { source, currency, amount, description } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      source,
      description,
    });
    const capture = await stripe.charges.capture(
      charge.id,
    );
    res.json(capture);
  } catch (error) {
    throw new Error(error);
  }
};
