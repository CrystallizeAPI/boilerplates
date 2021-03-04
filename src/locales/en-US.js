module.exports = {
  translation: {
    common: {
      price: "{{value, currency}}",
      related: "Related",
    },
    frontpage: {
      title: "Home",
    },
    product: {
      noVariants: "This product has no variants",
      buy: "Buy",
      addToBasket: "Add to basket",
      attributes: {
        color: "Color",
        green: "Green",
        blue: "Blue",
        black: "Black",
      },
    },
    basket: {
      title: "Basket",
      loading: "Hold on. Getting your basket...",
      removeItem: "Remove {{name}} from basket",
      empty: "Your basket is empty",
      empty_inCheckout: "You have no items in your basket",
      remainingUntilFreeShipping:
        "Add another {{amount, currency}} to your order for free shipping.",
      totalPrice: "Total price",
      discount: "Discount",
      totalPriceAfterDiscount: "Total after discount",
      shippingPrice: "Shipping",
      tax: "Tax",
      totalToPay: "To pay",
      goToCheckout: "Go to checkout",
    },
    layout: {
      builtWith: "Built with {{- link}}",
      poweredBy: "Powered by {{- link}}",
      searchPlaceholder: "Search",
    },
    search: {
      foundResults: "Found {{count}} matching result",
      foundResults_plural: "Found {{count}} matching results",
      orderTitle: "Order by",
      order: {
        ITEM_NAME_ASC: "Name ascending",
        ITEM_NAME_DESC: "Name descending",
        PRICE_ASC: "Price ascending",
        PRICE_DESC: "Price descending",
        STOCK_ASC: "Stock ascending",
        STOCK_DESC: "Stock descending",
      },
      filterResults: "Filter results",
      facets: {
        viewNResults: "Show {{count}} result",
        viewNResults_plural: "Show {{count}} results",
        price: {
          title: "Price",
          min: "Minimum price",
          max: "Maximum price",
        },
      },
    },
  },
}
