import { useState } from 'react';
import { useLocalCart } from '~/core/hooks/useLocalCart';
import { useAppContext } from '../app-context/provider';

export const AddToCartBtn: React.FC<{
    variants: any[];
    label?: string;
    quantity?: any;
}> = ({ variants, label = 'Add to cart', quantity }) => {
    const [showTada, setShowTada] = useState(false);
    const { add } = useLocalCart();

    const handleClick = () => {
        setShowTada(true);
        for (let i = 0; i < variants.length; i++) {
            add(variants[i]);
        }
        if (quantity.length > 0) {
            quantity.map((item: any) => {
                add(item.variant, item.qty);
            });
        }
        setTimeout(() => {
            setShowTada(false);
        }, 1500);
    };

    return (
        <>
            <button
                className="bg-[#000] border px-10 py-3 relative overflow-hidden h-[50px] rounded text-[#fff] w-[200px] font-bold hover:bg-black-100"
                onClick={() => {
                    handleClick();
                }}
            >
                <span
                    className={`w-[200] transition-all left-0 top-0 h-full w-full flex items-center justify-center absolute
                    ${showTada ? 'scale-0' : 'scale-100'}`}
                >
                    {label}
                </span>
                <span
                    className={`w-[200] text-3xl transition-all	left-0 top-0 h-full w-full flex items-center justify-center absolute ${
                        showTada ? 'scale-100' : 'scale-0'
                    }`}
                >
                    🎉
                </span>
            </button>
        </>
    );
};
