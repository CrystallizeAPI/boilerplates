module.exports = async function subscriptionContractToCrystallizeOrderModel(
  subscription
) {
  const meta = [];
  meta.push({ key: "isFirstOrder", value: "0" });

  return {
    cart: basket.cart,
    total: basket.total,
    meta,
    customer: {
      identifier: customerIdentifier,
      firstName: customerName[0],
      middleName: customerName.slice(1, customerName.length - 1).join(),
      lastName: customerName[customerName.length - 1],
      birthDate: Date,
      addresses: [
        {
          type: "billing",
          firstName: customerName[0],
          middleName: customerName.slice(1, customerName.length - 1).join(),
          lastName: customerName[customerName.length - 1],
          street: charge.billing_details.address.line1,
          street2: charge.billing_details.address.line2,
          postalCode: charge.billing_details.address.postal_code,
          city: charge.billing_details.address.city,
          state: charge.billing_details.address.state,
          country: charge.billing_details.address.country,
          phone: charge.billing_details.phone,
          email,
        },
        {
          type: "delivery",
          firstName: customerName[0],
          middleName: customerName.slice(1, customerName.length - 1).join(),
          lastName: customerName[customerName.length - 1],
          street: charge.billing_details.address.line1,
          street2: charge.billing_details.address.line2,
          postalCode: charge.billing_details.address.postal_code,
          city: charge.billing_details.address.city,
          state: charge.billing_details.address.state,
          country: charge.billing_details.address.country,
          phone: charge.billing_details.phone,
          email,
        },
      ],
    },
    payment: [
      {
        provider: "stripe",
        stripe: {
          paymentMethodId: charge.payment_method,
        },
      },
    ],
  };
};
