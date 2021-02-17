import React from 'react';

import Link from 'next/link';
import { H3 } from 'ui';
import { useLocale } from 'lib/app-config';
import getRelativePriceVariants from 'lib/pricing';
import Price from './components/price';
import { Outer, Footer, ImageWrapper, Img, Inner } from './styles';

export default function ProductItem({ data }) {
  const locale = useLocale();

  if (!data) {
    return null;
  }

  const { name, path, type, variants, matchingVariant } = data;
  const variant = matchingVariant || findDefaultVariant(variants) || {};
  const image = variant?.images?.[0] || variant?.image;
  const pricing = getRelativePriceVariants({ variant, locale });

  function findDefaultVariant(variants) {
    return variants?.find((variant) => variant.isDefault);
  }

  return (
    <Link href={path} passHref>
      <Outer type={type}>
        <Inner>
          <ImageWrapper>
            {image && <Img {...image} alt={name} sizes="250px" />}
          </ImageWrapper>

          <Footer>
            <H3>{name}</H3>
            <Price pricing={pricing} />
          </Footer>
        </Inner>
      </Outer>
    </Link>
  );
}
