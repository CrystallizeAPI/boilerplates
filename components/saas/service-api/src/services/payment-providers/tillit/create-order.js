const fetch = require("node-fetch");
const { TILLIT_URL } = require("./constants");

module.exports = async function createOrder({
  baseUrl,
  item,
  total,
  customer,
  company,
  phone,
  address,
}) {
  const totalValue = String(total * 10);

  const input = {
    gross_amount: totalValue,
    net_amount: totalValue,
    currency: "USD",
    discount_amount: "0",
    discount_rate: "0",
    invoice_type: "FUNDED_INVOICE",
    tax_amount: "0",
    tax_rate: "0",
    buyer: {
      company: {
        company_name: company.name,
        country_prefix: "NO",
        organization_number: company.id,
      },
      representative: {
        email: customer.email,
        first_name: customer.firstName,
        last_name: customer.lastName,
        phone_number: phone,
      },
    },
    merchant_additional_info: "Best merchant in town.",
    merchant_order_id: "1232",
    // merchant_reference: "45aa52f387871e3a210645d4",
    merchant_urls: {
      merchant_confirmation_url: `${baseUrl}/confirmation/tillit/{{order_id}}`,
      //   merchant_cancel_order_url: "{{merchant_url}}/confimation",
      //   merchant_edit_order_url: "{{merchant_url}}/edit-order",
      //   merchant_invoice_url: "{{merchant_url}}/invoice",
      //   merchant_order_verification_failed_url:
      //     "{{merchant_url}}/order-verification-failed",
      //   merchant_shipping_document_url: "{{merchant_url}}/shipping-document",
    },
    billing_address: address,
    shipping_address: address,
    line_items: [
      {
        description: `PhotoFinder subscription: ${item.name}`,
        name: `PhotoFinder - ${item.name}`,
        gross_amount: totalValue,
        net_amount: totalValue,
        tax_amount: "0",
        discount_amount: "0",
        quantity: 1.0,
        quantity_unit: "month subscription",
        tax_class_name: "",
        tax_rate: "0",
        type: "DIGITAL",
        unit_price: totalValue,
        image_url: "https://via.placeholder.com/150",
        product_page_url: "https://saas.boilerplate.app",
      },
    ],
  };

  const data = await fetch(`${TILLIT_URL}/order`, {
    method: "POST",
    headers: {
      "X-API-Key": process.env.TILLIT_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  }).then((response) => response.json());

  if (data.error_details) {
    throw new Error(data.error_details);
  }

  return data;
};
