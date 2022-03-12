# Service API on AWS using the serverless framework

Serverless API for a [best of breed headless architecture](https://crystallize.com/blog/headless-architecture-with-best-of-breed-stacks).

The Service API comes with the following features:

- User authentication with magic link
- Basket with cart validation
- Voucher codes
- Checkout with Stripe, Mollie, Klarna or Vipps
- A lot of Crystallize webhooks examples

---

## Environment variables

For local deveopment you have these two files to help setting the secrets:

`.env`

Will be included in git. Typically includes the Crystallize tenant identifier and other things that are not considered sensitive information

`.env.local`

Sensitive information, excluded from git. Example of what goes here is Crystallize Access tokens, JWT token secret and payment provider client keys.

---

## Serverless with AWS as provider

Read more about it here: https://www.serverless.com/framework/docs/providers/aws/
