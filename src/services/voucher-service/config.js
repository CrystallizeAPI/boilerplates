export const VOUCHERS_CONFIG = {
  DOES_NOT_REQUIRE_AUTH: [
    {
      code: "awesome-deal",
      discountAmount: null,
      discountPercent: 99,
    },
    {
      code: "fair-deal",
      discountAmount: 300,
      discountPercent: null,
    },
  ],
  REQUIRES_AUTH: [
    {
      code: "awesome-deal-for-login-users",
      discountAmount: null,
      discountPercent: 99,
    },
    {
      code: "fair-deal-logged-in",
      discountAmount: 500,
      discountPercent: null,
    },
  ]
}