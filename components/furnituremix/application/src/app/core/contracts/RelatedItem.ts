import { Image } from './Image';

export type RelatedItem = {
    name: string;
    path: string;
    defaultVariant: {
        price: number;
        images: Image[];
    };
}
