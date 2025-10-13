"use server";

import type { CartItem } from "@/use-cases/contracts/cart";
import { createOrder } from "@/use-cases/create-order";

export async function placeOrder(
    initialSate: string | null,
    formData: FormData
) {
    const fullName = formData.get("name") as string;
    const [firstName, lastName] = fullName.split(" ");
    const email = formData.get("email");
    const street = formData.get("address");
    const city = formData.get("city");
    const country = formData.get("country");
    const postalCode = formData.get("zip");
    const items = JSON.parse(formData.get("items") as string) as CartItem[];

    const customer = {
        firstName,
        ...(lastName && { lastName }),
        type: "individual",
        email,
        identifier: email,
        addresses: [
            {
                street,
                country,
                postalCode,
                city,
                type: "delivery",
            },
        ],
    };

    const [main, ...bom] = items;
    const parts = bom.flatMap((item) => ({
        name: item.name,
        sku: item.variant.sku,
        quantity: item.quantity ?? 1,
        imageUrl: item.images?.[0].url,
        price: item.price,
        meta: [{ key: "type", value: "Composable" }],
    }));

    const cart = [
        {
            name: main.name,
            sku: main.variant.sku,
            quantity: main.quantity ?? 1,
            imageUrl: main.images?.[0].url,
            price: main.price,
            meta: [
                {
                    key: "type",
                    value: "Main",
                },
                {
                    key: "bom",
                    value: parts?.map(({ sku }) => sku).join("_"),
                },
            ],
        },
        ...(parts ?? []),
    ];

    const orderIntent = { cart, customer } as any;
    const confirmation = await createOrder(orderIntent);

    return confirmation.id;
}
