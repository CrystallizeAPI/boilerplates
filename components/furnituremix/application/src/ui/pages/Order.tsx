import { useEffect, useState } from 'react';
import { useAppContext } from '../app-context/provider';
import { ServiceAPI } from '~/use-cases/service-api';
import { Price } from '../lib/pricing/pricing-component';
import { useAuth } from '../hooks/useAuth';
import { MagickLoginForm } from '../components/checkout-forms/magicklogin';
import { ClientOnly } from '@crystallize/reactjs-hooks';

export default ({ id, isServerSideAuthenticated }: { id: string; isServerSideAuthenticated: boolean }) => {
    const [tryCount, setTryCount] = useState(0);
    const [order, setOrder] = useState<any | null>(null);
    const { state: contextState } = useAppContext();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        (async () => {
            try {
                setOrder(
                    await ServiceAPI({
                        language: contextState.language,
                        serviceApiUrl: contextState.serviceApiUrl,
                    }).fetchOrder(id),
                );
            } catch (exception) {
                timeout = setTimeout(() => {
                    setTryCount(tryCount + 1);
                }, 500 * tryCount);
            }
        })();
        return () => clearTimeout(timeout);
    }, [id, tryCount]);

    return (
        <div className="min-h-[70vh] items-center flex lg:w-content mx-auto w-full">
            <ClientOnly>
                {order && isAuthenticated && isServerSideAuthenticated ? (
                    <div className="w-3/4 mx-auto">
                        <div className="mt-10">
                            <h1 className="font-bold text-3xl">Order Confirmation</h1>
                            <p className="mt-4">We've received your order.</p>
                            <p> The order ID is: #{order.id}.</p>
                            <div className="mt-2">
                                {order.cart.map((item: any, index: number) => {
                                    return (
                                        <div key={index} className="bg-grey2 px-3 py-2 mb-2 gap-2 flex items-center">
                                            <div className="img-container overflow-hidden rounded-md img-contain w-[50px] h-[70px]">
                                                <img src={item.imageUrl} />
                                            </div>
                                            <div className="flex w-full justify-between">
                                                <div>
                                                    <p className="font-semibold">
                                                        {item.name} x {item.quantity}
                                                    </p>
                                                </div>
                                                <p>
                                                    <Price currencyCode={contextState.currency.code}>
                                                        {item.price.gross}
                                                    </Price>
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div className="flex flex-col gap-4 border-t-2 border-grey4 py-4 items-end px-4 mt-5">
                                    <div className="flex text-grey3 justify-between w-60">
                                        <p>Net</p>
                                        <p>
                                            <Price currencyCode={contextState.currency.code}>{order.total.net}</Price>
                                        </p>
                                    </div>
                                    <div className="flex text-grey3 justify-between w-60">
                                        <p>Tax amount</p>
                                        <p>
                                            <Price currencyCode={contextState.currency.code}>
                                                {order.total.gross - order.total.net}
                                            </Price>
                                        </p>
                                    </div>
                                    <div className="flex font-bold text-xl justify-between w-60">
                                        <p>Paid</p>
                                        <p>
                                            <Price currencyCode={contextState.currency.code}>{order.total.gross}</Price>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-[70vh] items-center justify-center flex max-w-[500px] mx-auto">
                        <div className="mx-auto items-center justify-center flex w-full ">
                            <MagickLoginForm title="Login" onlyLogin actionTitle="Login" />
                        </div>
                    </div>
                )}
            </ClientOnly>
        </div>
    );
};
