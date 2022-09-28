import { ProductPriceVariant, ProductVariant } from '@crystallize/js-api-client';
import { Currency, CurrencyCode, getCurrencyFromCode } from './currencies';

export type DisplayPrice = {
    default: number;
    discounted?: number;
    percent: number;
    currency: Currency;
};

export default function displayPriceFor(
    variant: ProductVariant,
    identifiers: { default: string; discounted: string } = {
        default: 'default',
        discounted: 'sales',
    },
    currencyCode: CurrencyCode,
    discount?: {
        amount: number;
    },
): DisplayPrice {
    const priceVariants = variant?.priceVariants;
    const currency = getCurrencyFromCode(currencyCode);
    if (!priceVariants) {
        return {
            default: variant?.price ?? 0.0,
            percent: 0.0,
            currency,
        };
    }

    let defaultPrice =
        Object.values(priceVariants)?.find(
            (priceVariant: ProductPriceVariant) =>
                priceVariant.identifier === identifiers.default &&
                priceVariant?.currency?.toLocaleLowerCase() === currency.code?.toLocaleLowerCase(),
        )?.price || 0;

    // if there is a forced discount we take it
    const discountedPrice = discount
        ? discount.amount
        : Object.values(priceVariants)?.find(
              (priceVariant: ProductPriceVariant) =>
                  priceVariant.identifier === identifiers.discounted &&
                  priceVariant?.currency?.toLocaleLowerCase() === currency.code?.toLocaleLowerCase(),
          )?.price || undefined;

    if (!discountedPrice) {
        return {
            default: defaultPrice,
            percent: 0.0,
            currency,
        };
    }

    return {
        default: defaultPrice,
        discounted: discountedPrice,
        percent: defaultPrice > 0 ? Math.round(((defaultPrice - discountedPrice) / defaultPrice) * 100) : 0.0,
        currency,
    };
}
