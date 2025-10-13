export type Price = {
    gross: number;
    currency: string;
};

export type CartItem = {
    quantity: number;
    variant: {
        sku: string;
    };
    name?: string;
    price?: Price;
    images?: {
        url: string;
        width: string;
        height: string;
    }[];
};

export type Cart = {
    id?: string;
    items?: CartItem[];
    total?: { gross: number; currency?: string };
};
