const basketService = require("../../basket-service");

const { getClient } = require("./utils");

module.exports = async function createPaymentIntent({
  checkoutModel,
  context,
}) {
  const { basketModel } = checkoutModel;
  const { user } = context;
  const basket = await basketService.get({ basketModel, user });

  const paymentIntent = await getClient().paymentIntents.create({
    amount: basket.total.gross * 100,
    currency: basket.total.currency,
  });

  return paymentIntent;
};
