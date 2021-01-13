const gql = require("graphql-tag");

module.exports = gql`
  scalar JSON

  type Query {
    cart(simpleCart: CartQueryInput!): Cart!
    user: UserQueries!
    paymentProviders: PaymentProvidersQueries!
    vouchers: VoucherQueries!
  }

  type Mutation {
    user: UserMutations
  }

  type MutationResponse {
    success: Boolean!
    error: String
  }

  input CartQueryInput {
    language: String!
    items: [SimpleCartItem!]!
    voucherCodes: [String!]
  }

  input SimpleCartItem {
    sku: String!
    path: String!
    quantity: Int!
    priceVariantIdentifier: String!
  }

  type Cart {
    items: [CartItem!]!
    vouchers: [Voucher!]!
    total: Price!
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
    vat: Int!
    currency: String!
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

  type VoucherQueries {
    get(code: String!): Voucher
  }

  type Voucher {
    code: String!
    discountAmount: Int
    discountPercent: Float
  }

  type UserMutations {
    sendMagicLink(
      email: String!
      redirectURLAfterLogin: String!
    ): MutationResponse!
  }
`;
