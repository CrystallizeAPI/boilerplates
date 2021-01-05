import orderCreated from '../../../../../../src/orders/created';

export async function (req, res) {
  await orderCreated(req.body);
}