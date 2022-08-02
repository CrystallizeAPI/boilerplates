import { useState } from 'react';
import { useLocalCart } from '~/core/hooks/useLocalCart';
import { useAppContext } from '../app-context/provider';
import { useTranslation } from 'react-i18next';

export const AddToCartBtn = ({ products }: { products: any }) => {
    const [showTada, setShowTada] = useState(false);
    const { dispatch: contextDispatch } = useAppContext();
    const { add } = useLocalCart();
    let { t } = useTranslation('common');

    const handleClick = () => {
        setShowTada(true);
        if (Array.isArray(products)) {
            contextDispatch.addItemsToCart(products);
            for (let i = 0; i < products.length; i++) {
                add(products[i]);
            }
        } else {
            contextDispatch.addItemsToCart([products]);
            add(products);
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
                    {t('addToCart')}
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
