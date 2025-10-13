import type { Cart, CartItem } from "@/use-cases/contracts/cart";

export const getNextCart = (cart: Cart) => {
    return {
        ...cart,
        total: {
            ...cart.total,
            gross:
                cart?.items?.reduce(
                    (acc, item) => acc + (item.price?.gross ?? 0),
                    0
                ) ?? 0,
        },
    } satisfies Cart;
};
