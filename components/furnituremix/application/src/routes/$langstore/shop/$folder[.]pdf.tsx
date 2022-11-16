import { LoaderFunction, Response } from '@remix-run/node';
import ReactPDF from '@react-pdf/renderer';
import { StoreFrontAwaretHttpCacheHeaderTagger } from '~/use-cases/http/cache';
import { getStoreFront } from '~/core/storefront.server';
import { getContext } from '~/use-cases/http/utils';
import { Folder } from '~/ui/components/pdf/folder';
import dataFetcherForShapePage from '~/core/dataFetcherForShapePage.server';
import { ProductSlim } from '~/use-cases/contracts/Product';
import { Category } from '~/use-cases/contracts/Category';

export const loader: LoaderFunction = async ({ request, params }) => {
    const requestContext = getContext(request);
    const path = `/shop/${params.folder}`;
    const { shared } = await getStoreFront(requestContext.host);
    const data = (await dataFetcherForShapePage('category', path, requestContext, params)) as {
        products: ProductSlim[];
        category: Category;
    };
    const { products, category } = data;
    const pdf = await ReactPDF.renderToStream(<Folder category={category} products={products} />);
    return new Response(pdf, {
        headers: {
            ...StoreFrontAwaretHttpCacheHeaderTagger('15s', '1w', [path], shared.config.tenantIdentifier).headers,
            'Content-Type': 'application/pdf',
        },
    });
};
