module.exports = {
  translation: {
    common: {
      price: "{{value, currency}}",
      vat: "ΦΠΑ: {{value, currency}}",
    },
    frontpage: {
      title: "Κεντρική",
    },
    customer: {
      name: "Ονοματεπώνυμο",
      firstName: "Όνομα",
      lastName: "Επώνυμο",
      streetAddress: "Διεύθυνση",
      postalCode: "Ταχυδρομικός κώδικας",
      email: "Email",
      emailPlaceholder: "you@your.place",
      login: {
        title: "Σύνδεση",
        loggedIn: "Είστε συνδεδεμένος/η",
        instructions:
          "Εισάγετε τη διεύθυνση ηλεκτρονικού ταχυδρομίου σας και θα σας στείλουμε ένα σύνδεσμο σύνδεσης στο λογαριασμό σας.",
        emailAddressInvalid: "Παρακαλώ εισάγετε έναν έγκυρο σύνδεσμο",
        sendMagicLink: "Στείλε μου σύνδεσμο",
      },
    },
    product: {
      relatedProduct: "Σχετικό προϊόν",
      relatedProduct_plural: "Σχετικά προϊόντα",
      addToBasket: "Προσθήκη στο καλάθι",
      buy: "ΑΓΟΡΑ",
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
      vat: "ΦΠΑ",
      totalToPay: "Αξία",
      goToCheckout: "Oλοκλήρωση παραγγελίας",
    },
    checkout: {
      title: "Oλοκλήρωση παραγγελίας",
      payNow: "Εξόφληση τώρα",
      choosePaymentMethod: "Επίλεξτε τρόπο πληρωμής",
      noPaymentProvidersConfigured:
        "Κανένας τρόπος πληρωμής δεν έχει διαμορφωθεί",
      paymentProviderNotConfigured:
        "Ο πάροχος πληρωμών {{name}} δεν έχει διαμορφωθεί",
      paymentProviderLogoAlt: "Λογότυπο για {{name}}",
      loadingPaymentGateway: "Αρχικοποίηση τρόπου πληρωμής...",
      loadingPaymentGatewayFailed:
        "Ωχ, φαίνεται πως δεν μπορούσαμε να αρχικοποιήσουμε τον τρόπο πληρωμής: {{name}}",
      confirmation: {
        title: "Επιβεβαίωση παραγγελίας",
        shortStatus: `Η παραγγελία σας έχει επιβεβαιωθεί.`,
        shortStatus_withEmail: `Η παραγγελία σας έχει επιβεβαιωθεί. Ένα αντίγραφο έχει αποσταλεί στη διεύθυνση: {{email}}`,
      },
    },
    order: {
      total: "Σύνολο",
      item: "Αντικείμενο παραγγελίας",
      item_plural: "Αντικείμενα παραγγελίας",
    },
    layout: {
      menu: "Μενού",
      ecomBy: "Ηλεκτρονικό κατάστημα από",
      loadingVideo: "Το βίνετο φορτώνει",
    },
  },
}
