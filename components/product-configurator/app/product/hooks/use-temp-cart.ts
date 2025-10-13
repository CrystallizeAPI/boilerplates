"use client";

import {
    useEffect,
    useActionState,
    useOptimistic,
    startTransition,
} from "react";

import { getTempCart } from "@/app/actions/get-temp-cart";
import type { Cart, CartItem } from "@/use-cases/contracts/cart";
import type { Option, Skus, Variant } from "@/use-cases/contracts/product";
import { currency } from "@/use-cases/variables";
import { useUrlState } from "@/utils/use-url-state";

type UseCurrentTotalProps = {
    currentVariant?: Variant;
    options?: Option[];
};

export const useTempCart = ({
    currentVariant,
    options,
}: UseCurrentTotalProps) => {
    const [skus] = useUrlState<Skus>();
    const [serverCart, handleCart] = useActionState<Cart | null, FormData>(
        getTempCart,
        null
    );

    const [cart, setOptimisticTotal] = useOptimistic(serverCart);

    useEffect(() => {
        const items = (Object.keys(skus) as Array<keyof Skus>).reduce<
            CartItem[]
        >((acc, key) => {
            key === "options"
                ? skus.options?.length &&
                  acc.push(
                      ...skus.options
                          .split(",")
                          .map((sku) => ({ quantity: 1, variant: { sku } }))
                  )
                : acc.push({
                      quantity: 1,
                      variant: { sku: skus[key] as string },
                  });

            return acc;
        }, []);

        const variants = [
            currentVariant,
            ...(currentVariant?.grips ?? []),
            ...(currentVariant?.saddles ?? []),
            ...(options ?? []),
        ];

        const gross = items.reduce((acc, item) => {
            const variant = variants.find(
                (variant) => variant?.sku === item.variant.sku
            );

            return acc + (variant?.price.value ?? 0);
        }, 0);

        startTransition(() => {
            setOptimisticTotal((prev) => ({
                ...prev,
                total: { gross, currency },
            }));

            const form = new FormData();
            form.append("skus", JSON.stringify(items));
            handleCart(form);
        });
    }, [JSON.stringify(skus)]);

    return cart;
};
