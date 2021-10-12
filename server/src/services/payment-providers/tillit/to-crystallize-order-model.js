function tillitAddressToCrystallizeAddress(type, address, customer) {
  return {
    type,
    firstName: customer.firstName,
    middleName: "",
    lastName: customer.lastName,
    street: address.street_address,
    street2: "",
    postalCode: address.postal_code,
    city: address.city,
    state: address.region,
    country: address.country,
    phone: customer.phone,
    email: customer.email,
  };
}

module.exports = function tillitToCrystallizeOrderModel({
  basket,
  // checkoutModel,
  order,
  customerIdentifier,
}) {
  const meta = [
    {
      key: "tillitOrderId",
      value: order.id,
    },
  ];

  const tillitCustomer = {
    firstName: order.buyer.representative.first_name,
    lastName: order.buyer.representative.last_name,
    email: order.buyer.representative.email,
    phone: order.buyer.representative.phone_number,
  };

  return {
    cart: basket.cart,
    total: basket.total,
    meta,
    customer: {
      identifier: customerIdentifier,
      firstName: tillitCustomer.firstName,
      middleName: "",
      lastName: tillitCustomer.lastName,
      birthDate: Date,
      addresses: [
        tillitAddressToCrystallizeAddress(
          "billing",
          order.billing_address,
          tillitCustomer
        ),
        tillitAddressToCrystallizeAddress(
          "delivery",
          order.billing_address,
          tillitCustomer
        ),
      ],
    },
    payment: [
      {
        provider: "custom",
        custom: {
          properties: [
            { property: "orderId", value: order.id },
            {
              property: "companyId",
              value: order.buyer.company.organization_number,
            },
            {
              property: "companyName",
              value: order.buyer.company.company_name,
            },
          ],
        },
      },
    ],
  };
};
