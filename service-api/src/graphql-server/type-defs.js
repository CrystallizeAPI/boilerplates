const gql = require("graphql-tag");

module.exports = gql`
  scalar JSON

  type Query {
    basket(basketModel: BasketModelInput!): Basket!
    user: User!
    paymentProviders: PaymentProvidersQueries!
    orders: OrderQueries!
    subscriptionContracts: SubscriptionContractQueries!
  }

  type Basket {
    cart: [CartItem!]!
    total: Price!
  }

  type CartItem {
    sku: String!
    name: String
    path: String
    quantity: Int!
    vatType: VatType
    stock: Int
    price: Price
    priceVariants: [PriceVariant!]
    attributes: [Attribute!]
    images: [Image!]
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
    discount: Float!
  }

  type Tax {
    name: String
    percent: Float
  }

  type VatType {
    name: String!
    percent: Int!
  }

  type User {
    logoutLink: String!
    isLoggedIn: Boolean!
    hasActiveSubscriptionContract: Boolean!
    email: String
    firstName: String
    middleName: String
    lastName: String
    phone: String
    meta: [KeyValuePair!]
  }

  type PaymentProvidersQueries {
    stripe: PaymentProvider!
    tillit: TillitPaymentProvider!
  }

  type PaymentProvider {
    enabled: Boolean!
    config: JSON
  }

  type TillitPaymentProvider {
    confirmation(id: String!): JSON
  }

  type OrderQueries {
    get(id: String!): JSON
    getByCustomer(customerIdentifier: String!): JSON
  }

  type OrderMutations {
    delete(id: String!): JSON
  }

  type SubscriptionContractQueries {
    getByCustomer(customerIdentifier: String!): JSON
  }

  type SubscriptionContractMutations {
    delete(id: String!): JSON
    updatePaymentMethod(id: String!, paymentMethodId: String!): Boolean
    change(id: String!, plan: String!): Boolean
  }

  type Mutation {
    user: UserMutations
    order: OrderMutations
    subscriptionContracts: SubscriptionContractMutations
    paymentProviders: PaymentProvidersMutations!
  }

  input BasketModelInput {
    locale: LocaleInput!
    cart: [SimpleCartItem!]!
    crystallizeOrderId: String
    klarnaOrderId: String
  }

  input LocaleInput {
    locale: String!
    displayName: String
    appLanguage: String!
    crystallizeCatalogueLanguage: String
    crystallizePriceVariant: String
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
    ): SendMagicLinkResponse!
    update(input: UserUpdateInput!): User!
    startSignUp(email: String!, firstName: String!, lastName: String!): Boolean!
  }

  input UserUpdateInput {
    firstName: String
    middleName: String
    lastName: String
    phone: String
    meta: [KeyValuePairInput!]
  }

  type SendMagicLinkResponse {
    success: Boolean!
    error: String
  }

  input CheckoutModelInput {
    basketModel: BasketModelInput!
    customer: OrderCustomerInput
    confirmationURL: String!
    checkoutURL: String!
    termsURL: String!
  }

  input OrderCustomerInput {
    firstName: String
    lastName: String
    addresses: [AddressInput!]
  }

  input AddressInput {
    type: String
    email: String
    firstName: String
    middleName: String
    lastName: String
    street: String
    street2: String
    streetNumber: String
    postalCode: String
    city: String
    state: String
    country: String
    phone: String
  }

  type PaymentProvidersMutations {
    stripe: StripeMutations!
    klarna: KlarnaMutations!
    mollie: MollieMutations!
    vipps: VippsMutations!
    paypal: PaypalMutation!
    tillit: TillitMutation!
  }

  type StripeMutations {
    createPaymentIntent(
      checkoutModel: CheckoutModelInput!
      confirm: Boolean
      paymentMethodId: String
    ): JSON
    confirmOrder(
      checkoutModel: CheckoutModelInput!
      paymentIntentId: String!
    ): StripeConfirmOrderResponse!
  }

  type StripeConfirmOrderResponse {
    success: Boolean!
    orderId: String
  }

  type KlarnaMutations {
    renderCheckout(
      checkoutModel: CheckoutModelInput!
    ): KlarnaRenderCheckoutReponse!
  }

  type KlarnaRenderCheckoutReponse {
    html: String!
    klarnaOrderId: String!
    crystallizeOrderId: String!
  }

  type MollieMutations {
    createPayment(
      checkoutModel: CheckoutModelInput!
    ): MollieCreatePaymentResponse!
  }

  type MollieCreatePaymentResponse {
    success: Boolean!
    checkoutLink: String
    crystallizeOrderId: String!
  }

  type VippsMutations {
    initiatePayment(
      checkoutModel: CheckoutModelInput!
    ): VippsInitiatePaymentResponse!
  }

  type VippsInitiatePaymentResponse {
    success: Boolean!
    checkoutLink: String
    crystallizeOrderId: String!
  }

  type PaypalMutation {
    createPayment(checkoutModel: CheckoutModelInput!): PaypalPaymentResponse!
    confirmPayment(
      checkoutModel: CheckoutModelInput!
      orderId: String
    ): PaypalPaymentResponse!
  }

  type PaypalPaymentResponse {
    success: Boolean!
    orderId: String
  }

  type TillitMutation {
    search(searchTerm: String!): TillitSearchResponse!
    checkout(
      checkoutModel: CheckoutModelInput!
      tillitInput: TillitCheckoutInput!
      baseUrl: String!
    ): TillitCheckoutResponse
  }

  type TillitSearchResponse {
    success: Boolean!
    data: [TillitCompany]
  }

  type TillitCompany {
    id: String!
    name: String!
    highlight: String!
  }

  input TillitCompanyInput {
    id: String!
    name: String!
    highlight: String!
  }

  input TillitCheckoutInput {
    company: TillitCompanyInput!
    phone: String!
  }

  type TillitCheckoutResponse {
    success: Boolean!
    paymentUrl: String
  }

  type KeyValuePair {
    key: String!
    value: String
  }

  input KeyValuePairInput {
    key: String!
    value: String
  }
`;
