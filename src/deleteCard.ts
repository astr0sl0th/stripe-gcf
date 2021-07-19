import { HttpFunction } from "@google-cloud/functions-framework";
import stripe from "./initStripe";

export const deleteCard: HttpFunction = async (req, res) => {
  const { customerId, cardId } = req.body;
  try {
    const deletedCard = await stripe.customers.deleteSource(customerId, cardId);
    res.json(deletedCard);
  } catch (error) {
    res.status(500).json({ error: "Could not delete card" });
  }
};
