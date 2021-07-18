import { HttpFunction } from "@google-cloud/functions-framework";

export const webhooks: HttpFunction = (req, res) => {
  console.log("/webhooks POST route hit! req.body: ", req.body);

  let { data, type } = req.body;
  let { previous_attributes, object } = data;

  try {
    if (
      "status" in previous_attributes &&
      type === "customer.subscription.updated" &&
      previous_attributes.status === "active" &&
      object.status === "past_due"
    ) {
      console.log(
        "A subscription payment has failed! Subscription id: ",
        object.id,
      );
    }
    res.send(200);
  } catch (err) {
    console.log(new Error(`/webhooks route error: ${err}`));
    res.send(200);
  }
};

