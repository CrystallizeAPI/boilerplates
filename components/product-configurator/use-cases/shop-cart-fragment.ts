export const shopCartFragment = `
id
total {
    gross
    currency
}
items {
    name
    quantity
    variant {
        sku
    }
    price {
        net
        gross
        currency
    }
    images {
        url
        width
        height
    }
}
`;
