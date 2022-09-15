export type Image = {
    url: string;
    altText: string;
    variants: Array<{
        height: number;
        width: number;
        url: string;
    }>;
};
