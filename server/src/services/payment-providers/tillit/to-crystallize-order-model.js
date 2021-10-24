function tillitAddressToCrystallizeOrderAddress(address, customer) {
  return {
    ...address,
    firstName: customer.firstName,
    middleName: "",
    lastName: customer.lastName,
    phone: customer.phone,
    email: customer.email,
  };
}

function tillitAddressToCrystallizeAddress(type, address) {
  return {
    type,
    street: address.street_address,
    street2: "",
    postalCode: address.postal_code,
    city: address.city,
    state: address.region,
    country: address.country,
  };
}

function getTillitCustomer(tillitOrder) {
  return {
    firstName: tillitOrder.buyer.representative.first_name,
    lastName: tillitOrder.buyer.representative.last_name,
    email: tillitOrder.buyer.representative.email,
    phone: tillitOrder.buyer.representative.phone_number,
  };
}

function tillitToCrystallizeOrderModel({
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

  const tillitCustomer = getTillitCustomer(order);

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
        tillitAddressToCrystallizeOrderAddress(
          tillitAddressToCrystallizeAddress("billing", order.billing_address),
          tillitCustomer
        ),
        tillitAddressToCrystallizeOrderAddress(
          tillitAddressToCrystallizeAddress("delivery", order.billing_address),
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
}

module.exports = {
  getTillitCustomer,
  tillitAddressToCrystallizeAddress,
  tillitAddressToCrystallizeOrderAddress,
  tillitToCrystallizeOrderModel,
};
