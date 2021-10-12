const fetch = require("node-fetch");

module.exports = async function search({ searchTerm }) {
  try {
    const response = await fetch(
      `https://search-api-demo-j6whfmualq-lz.a.run.app/search?limit=50&offset=0&q=${searchTerm}`
    ).then((response) => response.json());
    return {
      success: true,
      data: response.data.items,
    };
  } catch (error) {
    return {
      success: false,
      data: [],
    };
  }
};
