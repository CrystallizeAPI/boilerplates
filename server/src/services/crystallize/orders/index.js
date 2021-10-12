const create = require("./create-order");
const update = require("./update-order");
const get = require("./get-order");
const _delete = require("./delete-order");
const getByCustomer = require("./get-by-customer");
const waitForOrderToBePersistated = require("./wait-for-order-to-be-persistated");

module.exports = {
  create,
  update,
  get,
  delete: _delete,
  getByCustomer,
  waitForOrderToBePersistated,
};
