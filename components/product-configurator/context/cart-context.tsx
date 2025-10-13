"use client";

import {
    createContext,
    useActionState,
    useContext,
    useEffect,
    useOptimistic,
    useState,
    useTransition,
} from "react";

import { getNextCart } from "@/use-cases/get-next-cart";
import type { Cart, CartItem } from "@/use-cases/contracts/cart";
import { updateCart } from "@/app/actions/update-cart";

type CartContextProps = {
    cart: Cart | null;
    isLoading: boolean;
    isOpen: boolean;
    emptyCart?: () => void;
    setIsOpen?: (isOpen: boolean) => void;
    onUpdateCart?: (formData: FormData) => void;
};

const CartContext = createContext<CartContextProps>({
    cart: null,
    isLoading: false,
    isOpen: false,
});

type CartProviderProps = {
    children: React.ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [initialCart, setInitialCart] = useState<Cart | null>(null);
    const [serverCart, handleCartAction, isLoading] = useActionState(
        updateCart,
        initialCart
    );
    const [cart, setOptimisticCart] = useOptimistic(serverCart ?? initialCart);
    const [, startTransition] = useTransition();

    useEffect(() => {
        fetch("/api/cart").then(async (res) => {
            if (res.ok) {
                const cart = await res.json();
                setInitialCart(cart);
            }
        });
    }, []);

    const onUpdateCart = (formData: FormData) => {
        setOptimisticCart((prevCart: Cart | null) => {
            const items = JSON.parse(
                formData.get("items") as string
            ) as CartItem[];

            console.log(getNextCart({ ...prevCart, items }));

            return getNextCart({ ...prevCart, items });
        });

        handleCartAction(formData);
    };

    const emptyCart = () => {
        startTransition(() => {
            const formData = new FormData();
            formData.append("type", "reset");
            handleCartAction(formData);
            setInitialCart(null);
        });
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                isOpen,
                setIsOpen,
                isLoading,
                emptyCart,
                onUpdateCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    const context = useContext(CartContext);
    return context;
};
