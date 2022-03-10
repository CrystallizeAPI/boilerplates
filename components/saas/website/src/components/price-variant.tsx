import { ProductPriceVariant } from "@/crystallize/types.generated";
import { FC } from "react";

export function getNumberFormatter({
  locale,
  currency,
}: {
  locale: string;
  currency: string;
}) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    notation: "compact",
  });
}

export const PriceVariant: FC<ProductPriceVariant> = ({ currency, price }) => {
  return (
    <span>
      {getNumberFormatter({ locale: "en-US", currency }).format(price || 0)}
    </span>
  );
};
