const crystallize = require("../../../services/crystallize");
const {
  getClient,
  toCrystallizeOrderModel,
} = require("../../../services/payment-providers/mollie");

module.exports = async function mollieOrderUpdate({ mollieOrderId }) {
  console.log("Mollie order update webhook");
  console.log({ mollieOrderId });

  const mollieClient = await getClient();

  const mollieOrder = await mollieClient.payments.get(mollieOrderId);

  const mollieCustomer = await mollieClient.customers.get(
    mollieOrder.customerId
  );

  const validCrystallizeOrder = toCrystallizeOrderModel({
    mollieOrder,
    mollieCustomer,
  });

  await crystallize.orders.updateOrder(
    mollieOrder.metadata.crystallizeOrderId,
    validCrystallizeOrder
  );
};
