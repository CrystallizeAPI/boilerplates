const fetch = require("node-fetch");
const { TILLIT_URL } = require("./constants");

function constructAddress(address, company) {
  return {
    organization_name: company.name,
    street_address: address.streetAddress,
    postal_code: address.postalCode,
    city: address.city,
    region: "",
    country: "NO",
  };
}

module.exports = async function getAddress(company) {
  const addressResponse = await fetch(
    `${TILLIT_URL}/company/${company.id}/address`
  ).then((response) => response.json());

  return constructAddress(addressResponse.address, company);
};
