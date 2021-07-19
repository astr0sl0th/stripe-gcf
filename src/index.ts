import express from "express";
import { cancelSubscription } from "./cancelSubscription";
import { createCharge } from "./createCharge";
import { createCustomer } from "./createCustomer";
import { createSubscription } from "./createSubscription";
import { deleteCard } from "./deleteCard";
import { deleteCustomer } from "./deleteCustomer";
import { updateCard } from "./updateCard";
import { webhooks } from "./webhooks";

const api = express();

api.use("/create-customer", createCustomer);
api.use("/delate-customer", deleteCustomer);
api.use("/charge-card", createCharge);
api.use("/update-card", updateCard);
api.use("/delete-card", deleteCard);
api.use("/create-subscription", createSubscription);
api.use("/cancel-subscription", cancelSubscription);

// TODO: https://stripe.com/docs/webhooks
// - so far only failed subscriptions are caught
// - need a way to conditionally turn on specific
// hooks based on use case to reduce function invocations
api.use("/webhooks", webhooks);

export { api as stripe };
