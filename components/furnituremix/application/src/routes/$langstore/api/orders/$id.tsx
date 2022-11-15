import { createOrderFetcher } from '@crystallize/js-api-client';
import { handleOrderRequestPayload } from '@crystallize/node-service-api-request-handlers';
import { LoaderFunction } from '@remix-run/node';
import { authenticate } from '~/infrastructure/authentication.server';
import { getContext } from '~/use-cases/http/utils';
import { privateJson } from '~/infrastructure/bridge/privateJson.server';
import { getStoreFront } from '~/infrastructure/storefront.server';

export const loader: LoaderFunction = async ({ request, params }) => {
    const requestContext = getContext(request);
    const { secret: storefront } = await getStoreFront(requestContext.host);
    const auth: any = await authenticate(request);
    return privateJson(
        await handleOrderRequestPayload(null, {
            fetcherById: createOrderFetcher(storefront.apiClient).byId,
            user: auth.user.aud,
            orderId: params.id!,
        }),
    );
};
