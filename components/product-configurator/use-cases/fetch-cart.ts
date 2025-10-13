import { storage } from "@/core/storage.server";
import { crystallizeClient } from "@/core/crystallize-client.server";

import type { Cart } from "@/use-cases/contracts/cart";
import { hydrateCart } from "./hydrate-cart";
import { shopCartFragment } from "./shop-cart-fragment";

const query = `#graphql
    query GetCart($id: UUID!) {
        cart(id: $id) {
            ${shopCartFragment}
        }
    }
  `;

export async function fetchCart(id?: string) {
    if (!id) {
        const hydrate = await hydrateCart({});
        !!hydrate?.id && (await storage.setCartId(hydrate.id));

        return hydrate;
    }

    try {
        const data = await crystallizeClient.shopCartApi<{ cart: Cart }>(
            query,
            { id }
        );

        return data.cart;
    } catch (exception) {
        console.error(exception);
    }
}
