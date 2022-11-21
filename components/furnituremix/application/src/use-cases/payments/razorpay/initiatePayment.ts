import { TStoreFrontConfig } from '@crystallize/js-storefrontaware-utils';
import {
    CartWrapper,
    handleRazorPayOrderPayload,
    razorPayPaymentPayload,
} from '@crystallize/node-service-api-request-handlers';
import { RequestContext, validatePayload } from '../../http/utils';

export default async (
    cartWrapper: CartWrapper,
    context: RequestContext,
    payload: unknown,
    storeFrontConfig: TStoreFrontConfig,
) => {
    return await handleRazorPayOrderPayload(validatePayload(payload, razorPayPaymentPayload), {
        currency: cartWrapper.cart.total.currency.toUpperCase(),
        credentials: {
            key_id: process.env.RAZORPAY_ID ?? storeFrontConfig?.configuration?.razorpay_key_id ?? '',
            key_secret: process.env.RAZORPAY_SECRET ?? storeFrontConfig?.configuration?.razorpay_key_secret ?? '',
        },
        fetchCart: async () => {
            return cartWrapper.cart;
        },
    });
};
