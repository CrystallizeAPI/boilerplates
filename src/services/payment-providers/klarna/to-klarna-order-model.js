const { getClient } = require("./utils");

module.exports = function crystallizeToKlarnaOrderModel(basket) {
  const { total, cart } = basket;

  const order_amount = total.gross * 100;

  return {
    order_amount,
    order_tax_amount: order_amount - total.net * 100,
    order_lines: cart.map(
      ({
        quantity,
        price,
        name,
        sku,
        productId,
        productVariantId,
        imageUrl,
      }) => {
        const { gross, net, tax } = price;

        const unit_price = gross * 100;
        const total_amount = unit_price * quantity;
        const total_tax_amount = total_amount - net * quantity * 100;

        return {
          name,
          reference: sku,
          unit_price,
          quantity,
          total_amount,
          total_tax_amount,
          type: "physical",
          tax_rate: tax.percent * 100,
          image_url: imageUrl,
          merchant_data: JSON.stringify({
            productId,
            productVariantId,
            taxGroup: tax,
          }),
        };
      }
    ),
  };
};
