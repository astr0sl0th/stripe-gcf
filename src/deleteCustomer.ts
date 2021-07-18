import { HttpFunction } from "@google-cloud/functions-framework";
import stripe from "./initStripe";

export const deleteCustomer: HttpFunction = async (req, res) => {
  const { id } = req.body;
  try {
    await stripe.customers.del(id);
  } catch (error) {
    res.status(500).json({ error: `Could not delate customer: ${error.id}` });
  }
};


