import { crystallizeClient } from "@/core/crystallize-client.server";

import { Cart } from "./contracts/cart";
import { shopCartFragment } from "./shop-cart-fragment";

type HydrateCartProps = {
    id?: string;
    items?: { sku: string; quantity: number }[];
};

const query = `#graphql
mutation HydrateCart($input: CartInput!) {
    hydrate(input: $input) {
        ${shopCartFragment}
    }
}
`;

export async function hydrateCart({ id, items }: HydrateCartProps) {
    try {
        const { hydrate } = await crystallizeClient.shopCartApi<{
            hydrate: Cart;
        }>(query, { input: { ...(!!id && { id }), items: items ?? [] } });

        return hydrate;
    } catch (exception) {
        console.log(exception);
        return null;
    }
}
