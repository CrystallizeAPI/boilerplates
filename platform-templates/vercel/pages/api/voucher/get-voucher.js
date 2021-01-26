/**
 * Endpoint to apply a voucher to reduce the
 * price of the basket total amount
 */

import voucherService from "../../../src/services/voucher-service";
import userService from "../../../src/services/user-service";


export default async function GetVoucher(req, res) {
  try {
    const currentUser = userService.authenticate(
      req.cookies[userService.USER_TOKEN_NAME]
    );

    const {code: voucherCode} = req.body.voucherCode
    if (!voucherCode) {
      res.status(401).send("A voucher code must be provided")
    }

    // Vouchers is a feature only available for logged in users as default.
    if (!currentUser) {
      res.status(403).send("You must be logged in to use vouchers")
    }

    const {voucher} = await voucherService.get({
      code: voucherCode,
      user: currentUser.token
    })
  
    if (!voucher) {
      res.status(200).send()
      // res.status(404).send("Voucher not found")
    }
    
    res.status(200).send(voucher)
  } catch (e) {
    res
      .status(500)
      .send("Something went wrong when trying to authenticated the user");
  }
}