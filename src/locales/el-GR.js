module.exports = {
  translation: {
    common: {
      price: "{{value, currency}}",
      related: "Related",
    },
    frontpage: {
      title: "Κεντρική",
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
      title: "Καλάθι",
      loading: "Περίμενε. Φορτώνουμε το καλάθι σου...",
      removeItem: "Αφαίρεσε {{name}} από το καλάθι",
      empty: "Το καλάθι σου είναι άδειο",
      empty_inCheckout: "Δεν έχεις προϊόντα στο καλάθι",
      remainingUntilFreeShipping:
        "Πρόσθεσε {{amount, currency}} στην παραγγελία σου για δωρεάν μεταφορικά.",
      totalPrice: "Συνολική τιμή",
      discount: "Έκπτωση",
      totalPriceAfterDiscount: "Τελική τιμή μετά την έκπτωση",
      shippingPrice: "Μεταφορικά",
      tax: "ΦΠΑ",
      totalToPay: "Αξία",
      goToCheckout: "Oλοκλήρωση παραγγελίας",
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
