module.exports = {
  translation: {
    common: {
      price: "{{value, currency}}",
      related: "Relatert",
    },
    frontpage: {
      title: "Hjem",
    },
    product: {
      noVariants: "Dette produkter har ingen produktvarianter",
      buy: "Kjøp",
      addToBasket: "Legg i handlevogn",
      attributes: {
        color: "Farge",
        green: "Grønn",
        blue: "Blå",
        black: "Svart",
      },
    },
    basket: {
      title: "Handlekurv",
      loading: "Vennligst vent. Henter din handlekurv...",
      removeItem: "Fjern {{name}} fra handlekurven",
      empty: "Handlekurven din er tom",
      empty_inCheckout: "Du har ikke lagt til noe i handlekurven enda.",
      remainingUntilFreeShipping:
        "Kjøp for {{amount, currency}} ekstra for å oppnå gratis frakt",
      totalPrice: "Totalt",
      discount: "Fratrekk",
      totalPriceAfterDiscount: "Totalt etter fratrekk",
      shippingPrice: "Frakt",
      tax: "Moms",
      totalToPay: "Til betaling",
      goToCheckout: "Gå til betaling",
    },
    layout: {
      builtWith: "Bygget med {{- link}}",
      poweredBy: "Kjører på {{- link}}",
      searchPlaceholder: "Søk",
    },
    search: {
      foundResults: "Fant {{count}} resultater",
      orderTitle: "Sorter etter",
      order: {
        ITEM_NAME_ASC: "Navn stigende",
        ITEM_NAME_DESC: "Navn synkende",
        PRICE_ASC: "Pris stigende",
        PRICE_DESC: "Pris synkende",
        STOCK_ASC: "Lagerbeholding stigende",
        STOCK_DESC: "Lagerbeholding synkende",
      },
      filterResults: "Filtrer resultater",
      facets: {
        viewNResults: "Vis {{count}} resultat",
        viewNResults_plural: "Vis {{count}} resultater",
        price: {
          title: "Pris",
          min: "Minpris",
          max: "Maksprice",
        },
      },
    },
  },
}
