const fetch = require("node-fetch");

module.exports = async function search({ searchTerm, locale }) {
  try {
    // Select the proper region to search in here.
    let TILLIT_REGION = "no";
    if (locale.appLanguage === "en-GB") {
      TILLIT_REGION = "gb";
    }

    const response = await fetch(
      `https://${TILLIT_REGION}.search.tillit.ai/search?limit=50&offset=0&q=${searchTerm}`
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
