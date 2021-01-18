const gql = require("graphql-tag");

module.exports = gql`
  scalar JSON

  type Query {
    basket(basketModel: BasketModelInput!): Basket!
    user: UserQueries!
    paymentProviders: PaymentProvidersQueries!
    orders: OrderQueries!
  }

  type Basket {
    cart: [CartItem!]!
    total: Price!
    voucher: Voucher
  }

  type CartItem {
    id: String!
    name: String
    path: String!
    quantity: Int!
    sku: String!
    vatType: VatType
    stock: Int
    price: Price
    priceVariants: [PriceVariant!]!
    attributes: [Attribute!]
    images: [Image!]!
  }

  type PriceVariant {
    price: Float
    identifier: String!
    currency: String!
  }

  type Attribute {
    attribute: String!
    value: String
  }

  type Image {
    url: String!
    variants: [ImageVariant!]
  }

  type ImageVariant {
    url: String!
    width: Int
    height: Int
  }

  type Price {
    gross: Float!
    net: Float!
    currency: String
    tax: Tax
    taxAmount: Float
  }

  type Tax {
    name: String
    percent: Float
  }

  type VatType {
    name: String!
    percent: Int!
  }

  type UserQueries {
    logoutLink: String!
    isLoggedIn: Boolean!
    email: String
  }

  type PaymentProvidersQueries {
    stripe: PaymentProvider!
    klarna: PaymentProvider!
    vipps: PaymentProvider!
    mollie: PaymentProvider!
  }

  type PaymentProvider {
    enabled: Boolean!
    config: JSON
  }

  type OrderQueries {
    get(id: String!): JSON
  }

  type Voucher {
    code: String!
    discountAmount: Int
    discountPercent: Float
  }

  type Mutation {
    user: UserMutations
    paymentProviders: PaymentProvidersMutations!
  }

  type MutationResponse {
    success: Boolean!
    error: String
  }

  input BasketModelInput {
    language: String!
    cart: [SimpleCartItem!]!
    voucherCode: String
  }

  input SimpleCartItem {
    sku: String!
    path: String!
    quantity: Int
    priceVariantIdentifier: String!
  }

  type UserMutations {
    sendMagicLink(
      email: String!
      redirectURLAfterLogin: String!
    ): MutationResponse!
  }

  input CheckoutModelInput {
    basketModel: BasketModelInput!
    metadata: JSON
    customer: CustomerInput
  }

  input CustomerInput {
    firstName: String
    lastName: String
    addresses: [AddressInput!]
  }

  input AddressInput {
    type: String
    email: String
  }

  type PaymentProvidersMutations {
    stripe: StripeMutations!
  }

  type StripeMutations {
    createPaymentIntent(basketModel: BasketModelInput!): JSON
    confirmOrder(
      checkoutModel: CheckoutModelInput!
      paymentIntentId: String!
    ): StripeConfirmOrderResponse!
  }

  type StripeConfirmOrderResponse {
    success: Boolean!
    orderId: String
  }
`;
