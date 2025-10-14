"use server";

import { crystallizeClient } from "@/core/crystallize-client.server";
import { CartItemInput } from "@/use-cases/contracts/cart-items-input";
import { createOrderManager } from "@crystallize/js-api-client";
import { RegisterOrderInput } from "@crystallize/schema/pim";

export async function placeOrder(
    _: unknown,
    formData: FormData
) {
    const fullName = formData.get("name") as string;
    const [firstName, lastName] = fullName.split(" ");
    const email = formData.get("email")?.toString().toLowerCase() || "";
    const street = formData.get("address")?.toString() || "";
    const city = formData.get("city")?.toString() || "";
    const country = formData.get("country")?.toString() || "";
    const postalCode = formData.get("zip")?.toString() || "";
    const items = JSON.parse(formData.get("items") as string) as CartItemInput[];
    const customer: RegisterOrderInput['customer'] = {
        firstName,
        ...(lastName && { lastName }),
        type: "individual",
        email,
        identifier: `${email}`,
        addresses: [
            {
                street,
                country,
                postalCode,
                city,
                type: "delivery" as const,
            },
        ],
    };

    const [main, ...bom] = items;
    const parts = bom.flatMap((item) => ({
        name: item.name || "Part",
        sku: item.variant.sku,
        quantity: item.quantity ?? 1,
        imageUrl: item.images?.[0].url,
        price: item.price,
        meta: [{ key: "type", value: "Composable" }],
    }));

    const cart: RegisterOrderInput['cart'] = [
        {
            name: main.name || "Product",
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

    const orderIntent = { cart, customer };
    const orderManger = createOrderManager(crystallizeClient);
    const confirmation = await orderManger.register(orderIntent);
    return confirmation.id;
}
