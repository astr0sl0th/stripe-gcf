# Stripe GCF

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

This is a no fuss [Google Cloud Function](https://cloud.google.com/functions/) that aims to create a wrapper around the [Stripe](https://stripe.com/) [Node.js SDK](https://github.com/stripe/stripe-node) allowing for a serverless Stripe deployment.

## Dependencies

- [gcloud](https://cloud.google.com/sdk/docs/install)
- [yarn](https://yarnpkg.com/)
- [node.js](https://nodejs.org/en/) (14)

## Installation

Clone the repository

```bash
  git clone git@github.com:astr0sl0th/stripe-gcf.git && cd stripe-gfc
```

Install `gcf-stripe` dependencies

```bash
  yarn
```

## Running locally

Create a `.env` file and set your stripe secret test key

```bash
  # Your super secret 🔑
  STRIPE_SECRET_KEY=sk_test_123456
  SUBSCRIPTION_PRICE=price_123456
```

This will start a local server `http://localhost:8080`

```bash
  # 👀 for changes and start server
  yarn watch
```

## Deployment

To deploy `gcf-stripe` run

```bash
  # Build the function
  yarn build 🔧
  # Deploy to google cloud 🚀
  gcloud functions deploy stripe \
  --set-env-vars STRIPE_SECRET_KEY=sk_live_123456 \
  --entry-point ./dist/index.js \
  --runtime nodejs14 \
  --trigger-http
```

## TODO

- Add API documentation
- Support more stripe functions
