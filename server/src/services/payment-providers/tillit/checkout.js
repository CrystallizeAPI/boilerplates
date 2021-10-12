const crystallize = require("../../crystallize");
const basketService = require("../../basket-service");
const tillitToCrystallizeOrderModel = require("./to-crystallize-order-model");
const getAddress = require("./get-address");
const createTillitOrder = require("./create-order");
const updateTillitOrder = require("./update-order");

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

    if (!crystallizeCustomer) {
      console.log("Create Crystallize customer");
      await crystallize.customers.create({
        identifier: email,
        email: email,
        firstName: customer.firstName,
        lastName: customer.lastName,
      });
    }

    console.log("Creating Tillit order");
    const tillitOrder = await createTillitOrder({
      basket,
      customer,
      company,
      phone,
      address,
    });
    console.log(tillitOrder);
    console.log("Created Tillit order: " + tillitOrder.id);

    console.log("Creating Crystallize order");
    const crystallizeOrder = await crystallize.orders.create(
      tillitToCrystallizeOrderModel({
        basket,
        checkoutModel,
        order: tillitOrder,
        customerIdentifier: email,
      })
    );

    await updateTillitOrder(tillitOrder.id, {
      // ...tillitOrder,
      merchant_urls: {
        merchant_confirmation_url: `${baseUrl}/confirmation/tillit/${crystallizeOrder.id}`,
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
