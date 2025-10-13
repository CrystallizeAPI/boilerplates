"use server";

import { storage } from "@/core/storage.server";
import type { Cart, CartItem } from "@/use-cases/contracts/cart";
import { hydrateCart } from "@/use-cases/hydrate-cart";
import { currency } from "@/use-cases/variables";

export const getTempCart = async (
    initialSate: Cart | null,
    formData: FormData
) => {
    const id = await storage.getCartId({ isTemp: true });

    try {
        const items = JSON.parse(formData.get("skus") as string) as CartItem[];

        const cart = await hydrateCart({
            id,
            items: items.map((item) => ({
                sku: item.variant.sku,
                quantity: item.quantity ?? 1,
            })),
        });

        !!cart?.id && (await storage.setCartId(cart.id, { isTemp: true }));

        return cart as Cart;
    } catch (e) {
        console.log(e);
        return { total: { gross: 0, currency } } as Cart;
    }
};
