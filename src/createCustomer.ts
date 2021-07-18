import { HttpFunction } from "@google-cloud/functions-framework";
import stripe from "./initStripe";

export const createCustomer: HttpFunction = async (req, res) => {
  const { name, email } = req.body;
  const { id } = await stripe.customers.create({ name, email });
  res.json({ id });
};
