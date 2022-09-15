import { RichText } from './RichText';
import { Topic } from './Topic';
import { Image } from './Image';
import { ProductVariant } from './ProductVariant';

export type Product = {
    id: string;
    path: string;
    name: string;
    title: string;
    description?: string;
    story?: Array<{
        title?: string;
        body?: RichText;
        images: Image[];
    }>;
    specifications: Array<{
        title: string;
        properties: Record<string, string>;
    }>;
    dimensions: Record<
        string,
        {
            title: string;
            value: number;
            unit: string;
        }
    >;
    downloads: Array<{
        title: string;
        description?: RichText;
        files: Array<{
            title: string;
            url: string;
        }>;
    }>;
    relatedItems: Array<{
        name: string;
        path: string;
        defaultVariant: {
            price: number;
            images: Image[];
        };
    }>;
    topics: Array<Topic>;
    seo: {
        title: string;
        description?: string;
        image?: string;
    };
    vat: {
        name: string;
        rate: number;
    };
    defaultVariant: ProductVariant;
    variants: Array<ProductVariant>;
};
