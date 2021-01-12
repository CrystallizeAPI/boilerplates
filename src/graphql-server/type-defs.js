const gql = require("graphql-tag");

module.exports = gql`
  scalar JSON

  type Query {
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
    sendMagicLink(email: String!, loggedInRedirect: String!): MutationResponse!
  }
`;
