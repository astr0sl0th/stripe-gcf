import { HttpFunction } from "@google-cloud/functions-framework";
import stripe from "./initStripe";

export const updateCard: HttpFunction = async (req, res) => {
    const {customerId, cardId, details} = req.body
    try {
    const card = await stripe.customers.updateSource(
        customerId,
        cardId,
        {...details}
      );
      res.json(card)
    }catch(error) {
        res.status(500).json({error: 'Unable to update card'})
    }
};
