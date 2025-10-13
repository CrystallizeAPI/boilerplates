import { crystallizeClient } from "@/core/crystallize-client.server";
import { createOrderManager } from "@crystallize/js-api-client";

export async function createOrder(orderIntent: any) {
    const orderManger = createOrderManager(crystallizeClient);
    const confirmation = await orderManger.register(orderIntent);

    return confirmation;
}
