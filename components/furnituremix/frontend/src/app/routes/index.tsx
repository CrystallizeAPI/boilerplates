import { HeadersFunction, json, LoaderFunction } from "@remix-run/node";
import { HttpCacheHeaderTagger } from "~/core/Http-Cache-Tagger";

import { GridItem } from "~/core/components/grid-item";
import splideStyles from "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { CategoryList } from "~/core/components/category-list";
import { fetchCampaignPage, fetchShop } from "~/core/UseCases";
import { GridRenderer, GridRenderingType } from '@crystallize/reactjs-components/dist/grid';

import { useLoaderData } from "@remix-run/react";

export const headers: HeadersFunction = () => {
    return HttpCacheHeaderTagger("1m", "1w", ["home"]).headers;
}

export function links() {
    return [{ rel: "stylesheet", href: splideStyles }];
}

export const loader: LoaderFunction = async ({ params }) => {
    const path = `/campaign`;
    const data = await fetchCampaignPage(path);
    const shop = await fetchShop("/shop");
    return json({ data, shop }, HttpCacheHeaderTagger("30s", "1w", [path]));
};

export default function HomePage() {
    const { data, shop } = useLoaderData();
    let grid = data?.component?.content?.grids[0];

    return (
        <div className="lg:w-content mx-auto w-full test">
            {grid && <GridRenderer
                grid={grid}
                type={GridRenderingType.Div}
                cellComponent={({ cell }: { cell: any }) => <GridItem cell={cell} />}
            />}
            <div className="mt-20">
                {shop?.children?.map((category: any) => {
                    return <CategoryList category={category} key={category.name} />;
                })}
            </div>
            <div className="mt-20">
                {shop?.children?.map((category: any) => {
                    return <CategoryList category={category} key={category.name} />;
                })}
            </div>
            <div className="mt-20 bg-[#E2ECE9] px-10 py-1">
                {shop?.children?.map((category: any) => {
                    return <CategoryList category={category} key={category.name} />;
                })}
            </div>
        </div>
    );
}