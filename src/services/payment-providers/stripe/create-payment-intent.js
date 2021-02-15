module.exports = async function createPaymentIntent({
  checkoutModel,
  context,
}) {
  const basketService = require("../../basket-service");
  const { getClient } = require("./utils");

  const { basketModel } = checkoutModel;

  const basket = await basketService.get({ basketModel, context });

  const paymentIntent = await getClient().paymentIntents.create({
    amount: basket.total.gross * 100,
    currency: basket.total.currency,
  });

  return paymentIntent;
};
