export default {
  translation: {
    common: {
      price: '{{value, currency}}',
      tax: 'Moms: {{value, currency}}',
      close: 'Lukk'
    },
    frontpage: {
      title: 'Hjem'
    },
    customer: {
      name: 'Navn',
      firstName: 'Fornavn',
      lastName: 'Etternavnn',
      streetAddress: 'Gate',
      postalCode: 'Postnr.',
      email: 'Epost',
      emailPlaceholder: 'deg@ditt.sted',
      login: {
        title: 'Logg inn',
        loggedIn: 'Du er logget inn',
        instructions:
          'Tast inn din epostaddresse og vi vil sende deg en passordfri innlogginslink',
        emailAddressInvalid: 'Vennligst oppgi en gyldig epostaddresse',
        sendMagicLink: 'Send meg innloggingslink på epost'
      }
    },
    product: {
      relatedProduct: 'Relatert produkt',
      relatedProduct_plural: 'Relaterte produkter',
      addToBasket: 'Legg i handlekurv',
      buy: 'KJØP',
      outOfStock: 'Ikke på lager',
      stock: '{{stockCount}} på lager',
      attributes: {
        color: 'Color',
        green: 'Green',
        blue: 'Blue',
        black: 'Black'
      }
    },
    basket: {
      title: 'Handlekurv',
      loading: 'Vennligst vent. Henter din handlekurv...',
      removeItem: 'Fjern {{name}} fra handlekurven',
      empty: 'Handlekurven din er tom',
      empty_inCheckout: 'Du har ikke lagt til noe i handlekurven enda.',
      remainingUntilFreeShipping:
        'Kjøp for {{amount, currency}} ekstra for å oppnå gratis frakt',
      totalPrice: 'Totalt',
      discount: 'Fratrekk',
      totalPriceAfterDiscount: 'Totalt etter fratrekk',
      shippingPrice: 'Frakt',
      tax: 'Moms',
      totalToPay: 'Til betaling',
      goToCheckout: 'Gå til betaling'
    },
    checkout: {
      title: 'Betaling',
      payNow: 'Betal nå',
      choosePaymentMethod: 'Velg betalingsmetode',
      noPaymentProvidersConfigured: 'Ingen betalingstjenester er konfigurert',
      paymentProviderNotConfigured:
        'Betalingstjenesten {{name}} er ikke konfigurert',
      paymentProviderLogoAlt: 'Logo for {{name}}',
      confirmingCardPayment: 'Please wait your card details are confirmed...',
      loadingPaymentGateway: 'Laster betalingstjenesten...',
      loadingPaymentGatewayFailed:
        'Oisann. Betalingstjenesten {{name}} kan ikke lastes akkurat nå',
      confirmation: {
        title: 'Ordrebekreftelse',
        shortStatus: `Din ordre er bekreftet`,
        shortStatus_withEmail: `Din ordre er bekreftet. En kopi av ordren er send til {{email}}`
      }
    },
    order: {
      total: 'Totalt',
      item: 'Vare',
      item_plural: 'Varer'
    },
    layout: {
      menu: 'Meny',
      searchPlaceholder: 'Søk etter ting',
      ecomBy: 'Nettbutikk av',
      loadingVideo: 'Laster video',
      slider: {
        previous: 'Se forrige element',
        next: 'Se neste element'
      }
    },
    search: {
      label: 'Søk',
      foundResults: 'Fant {{count}} resultater',
      orderTitle: 'Sorter etter',
      order: {
        ITEM_NAME_ASC: 'Navn stigende',
        ITEM_NAME_DESC: 'Navn synkende',
        PRICE_ASC: 'Pris stigende',
        PRICE_DESC: 'Pris synkende',
        STOCK_ASC: 'Lagerbeholding stigende',
        STOCK_DESC: 'Lagerbeholding synkende'
      },
      filter: 'Filtrer',
      facets: {
        viewNResults: 'Vis {{count}} resultat',
        viewNResults_plural: 'Vis {{count}} resultater',
        reset: 'Tilbakestill',
        price: {
          title: 'Pris',
          min: 'Minpris',
          max: 'Maksprice'
        }
      }
    }
  }
};
