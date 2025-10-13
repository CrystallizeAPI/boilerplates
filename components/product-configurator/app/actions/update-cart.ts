"use server";

import { hydrateCart } from "@/use-cases/hydrate-cart";
import type { Cart, CartItem } from "@/use-cases/contracts/cart";

import { storage } from "@/core/storage.server";

export async function updateCart(initialSate: Cart | null, formData: FormData) {
    const type = formData.get("type") as string;

    if (type === "reset") {
        await storage.delete();
        await storage.delete({ isTemp: true });
        return null;
    }

    const prevCartId = await storage.getCartId();
    const tempCartId = await storage.getCartId({ isTemp: true });
    const cartId = prevCartId ?? tempCartId;
    cartId === tempCartId && (await storage.delete({ isTemp: true }));

    const itemsData = JSON.parse(formData.get("items") as string) as CartItem[];
    const items = itemsData.map((item) => ({
        sku: item.variant.sku,
        quantity: item.quantity ?? 1,
    }));

    try {
        const cart = await hydrateCart({ id: cartId, items });
        !!cart?.id && (await storage.setCartId(cart.id));

        return cart as Cart;
    } catch (error) {
        console.error("Cart update failed:", error);
        return null;
    }
}
