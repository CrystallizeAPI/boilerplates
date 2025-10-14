import { storage } from "@/core/storage.server";
import { crystallizeClient } from "@/core/crystallize-client.server";
import { cartHydrationQuery, hydrateCart } from "./hydrate-cart";
import { Cart } from "@crystallize/schema/shop";
import { jsonToGraphQLQuery } from "json-to-graphql-query";

export async function fetchCart(id?: string) {
    if (!id) {
        const hydrate = await hydrateCart({});
        !!hydrate?.id && (await storage.real.setCartId(hydrate.id));

        return hydrate;
    }

    try {

        const query = {
            cart: {
                __args: { id },
                ...cartHydrationQuery,

            }
        }
        const data = await crystallizeClient.shopCartApi<{ cart: Cart }>(jsonToGraphQLQuery({ query }));
        return data.cart;
    } catch (exception) {
        console.error(exception);
    }
}
