import { HttpCacheHeaderTaggerFromLoader, StoreFrontAwaretHttpCacheHeaderTagger } from '~/use-cases/http/cache';
import { HeadersFunction, json, LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getStoreFront } from '~/core/storefront.server';
import { buildMetas } from '~/use-cases/MicrodataBuilder';
import { getContext } from '~/use-cases/http/utils';
import Product from '~/ui/pages/Product';
import dataFetcherForShapePage from '~/core/dataFetcherForShapePage.server';
import videoStyles from '@crystallize/reactjs-components/assets/video/styles.css';

export const headers: HeadersFunction = ({ loaderHeaders }) => {
    return HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers;
};

export let meta: MetaFunction = ({ data }) => {
    return buildMetas(data.data);
};

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: videoStyles }];
};

export const loader: LoaderFunction = async ({ request, params }) => {
    const requestContext = getContext(request);
    const path = `/shop/${params.folder}/${params.product}`;
    const { shared } = await getStoreFront(requestContext.host);
    const data = await dataFetcherForShapePage('product', path, requestContext, params);
    return json({ data }, StoreFrontAwaretHttpCacheHeaderTagger('15s', '1w', [path], shared.config.tenantIdentifier));
};

export default () => {
    const { data } = useLoaderData();
    return <Product data={data} />;
};
