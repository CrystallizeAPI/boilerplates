const crystallize = require("../../crystallize");
const basketService = require("../../basket-service");
const {
  tillitToCrystallizeOrderModel,
  tillitAddressToCrystallizeAddress,
} = require("./to-crystallize-order-model");
const getAddress = require("./get-address");
const createTillitOrder = require("./create-order");

module.exports = async function checkout({
  checkoutModel,
  tillitInput,
  baseUrl,
  context,
}) {
  try {
    const { company, phone } = tillitInput;
    const { basketModel, customer } = checkoutModel;
    const email = customer.addresses[0].email;

    const basket = await basketService.get({ basketModel, context });

    console.log("Fetching company address from Tillit");
    const address = await getAddress(company);

    const crystallizeCustomer = await crystallize.customers.get({
      identifier: email,
    });

    const product = await crystallize.products.getByPath(
      `/pricing-page/${basket.cart[0].sku}`
    );

    console.log("Creating Tillit order");
    const tillitOrder = await createTillitOrder({
      baseUrl,
      item: basket.cart[0],
      total: basket.total.gross,
      customer: crystallizeCustomer,
      company,
      phone,
      address,
    });
    console.log(tillitOrder);
    console.log("Created Tillit order: " + tillitOrder.id);

    console.log("Creating Crystallize order");
    await crystallize.orders.create(
      tillitToCrystallizeOrderModel({
        order: tillitOrder,
        product,
        customer: crystallizeCustomer,
        meta: [{ key: "isFirstOrder", value: "1" }],
      })
    );

    console.log("Updating Crystallize customer");
    await crystallize.customers.update({
      identifier: email,
      customer: {
        phone: phone,
        companyName: company.name,
        addresses: [
          tillitAddressToCrystallizeAddress(
            "billing",
            tillitOrder.billing_address
          ),
          tillitAddressToCrystallizeAddress(
            "delivery",
            tillitOrder.billing_address
          ),
        ],
      },
    });

    return {
      success: true,
      paymentUrl: tillitOrder.payment_url,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
    };
  }
};
