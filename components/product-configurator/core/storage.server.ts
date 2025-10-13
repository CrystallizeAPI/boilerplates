import { cookies } from "next/headers";

const getCartId = (isTemp?: boolean) => (isTemp ? "tempCartId" : "cartId");

export const storage = {
    getCartId: async (opt?: { isTemp?: boolean }) => {
        const cookieStore = await cookies();
        const cartId = cookieStore.get(getCartId(opt?.isTemp));
        if (!cartId) {
            return undefined;
        }
        return cartId.value;
    },
    setCartId: async (cartId: string, opt?: { isTemp?: boolean }) => {
        const cookieStore = await cookies();
        cookieStore.set(getCartId(opt?.isTemp), cartId);
    },
    delete: async (opt?: { isTemp?: boolean }) => {
        const cookieStore = await cookies();
        cookieStore.delete(getCartId(opt?.isTemp));
    },
};
