import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AllPlansQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllPlansQuery = (
  { __typename?: 'Query' }
  & { catalogue?: Types.Maybe<(
    { __typename?: 'Document' }
    & { children?: Types.Maybe<Array<{ __typename?: 'Document' } | { __typename?: 'Folder' } | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'id' | 'name' | 'type' | 'path' | 'isVirtual' | 'isSubscriptionOnly'>
      & { variants?: Types.Maybe<Array<(
        { __typename?: 'ProductVariant' }
        & Pick<Types.ProductVariant, 'id' | 'name' | 'sku' | 'price' | 'stock' | 'isDefault'>
        & { priceVariants?: Types.Maybe<Array<(
          { __typename?: 'ProductPriceVariant' }
          & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
        )>>, images?: Types.Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'key' | 'width' | 'url'>
          )>> }
        )>>, subscriptionPlans?: Types.Maybe<Array<(
          { __typename?: 'ProductVariantSubscriptionPlan' }
          & Pick<Types.ProductVariantSubscriptionPlan, 'identifier' | 'name'>
          & { periods: Array<(
            { __typename?: 'ProductVariantSubscriptionPlanPeriod' }
            & Pick<Types.ProductVariantSubscriptionPlanPeriod, 'id' | 'name'>
            & { initial?: Types.Maybe<(
              { __typename?: 'ProductVariantSubscriptionPlanPricing' }
              & { priceVariants?: Types.Maybe<Array<(
                { __typename?: 'ProductPriceVariant' }
                & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
              )>> }
            )>, recurring?: Types.Maybe<(
              { __typename?: 'ProductVariantSubscriptionPlanPricing' }
              & { priceVariants?: Types.Maybe<Array<(
                { __typename?: 'ProductPriceVariant' }
                & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
              )>>, meteredVariables?: Types.Maybe<Array<(
                { __typename?: 'ProductVariantSubscriptionMeteredVariable' }
                & Pick<Types.ProductVariantSubscriptionMeteredVariable, 'id' | 'name' | 'identifier' | 'tierType'>
                & { tiers: Array<(
                  { __typename?: 'ProductVariantSubscriptionPlanTier' }
                  & Pick<Types.ProductVariantSubscriptionPlanTier, 'threshold' | 'price'>
                  & { priceVariants?: Types.Maybe<Array<(
                    { __typename?: 'ProductPriceVariant' }
                    & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
                  )>> }
                )> }
              )>> }
            )> }
          )> }
        )>> }
      )>>, vatType?: Types.Maybe<(
        { __typename?: 'VatInfo' }
        & Pick<Types.VatInfo, 'name' | 'percent'>
      )> }
    )>> }
  ) | (
    { __typename?: 'Folder' }
    & { children?: Types.Maybe<Array<{ __typename?: 'Document' } | { __typename?: 'Folder' } | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'id' | 'name' | 'type' | 'path' | 'isVirtual' | 'isSubscriptionOnly'>
      & { variants?: Types.Maybe<Array<(
        { __typename?: 'ProductVariant' }
        & Pick<Types.ProductVariant, 'id' | 'name' | 'sku' | 'price' | 'stock' | 'isDefault'>
        & { priceVariants?: Types.Maybe<Array<(
          { __typename?: 'ProductPriceVariant' }
          & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
        )>>, images?: Types.Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'key' | 'width' | 'url'>
          )>> }
        )>>, subscriptionPlans?: Types.Maybe<Array<(
          { __typename?: 'ProductVariantSubscriptionPlan' }
          & Pick<Types.ProductVariantSubscriptionPlan, 'identifier' | 'name'>
          & { periods: Array<(
            { __typename?: 'ProductVariantSubscriptionPlanPeriod' }
            & Pick<Types.ProductVariantSubscriptionPlanPeriod, 'id' | 'name'>
            & { initial?: Types.Maybe<(
              { __typename?: 'ProductVariantSubscriptionPlanPricing' }
              & { priceVariants?: Types.Maybe<Array<(
                { __typename?: 'ProductPriceVariant' }
                & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
              )>> }
            )>, recurring?: Types.Maybe<(
              { __typename?: 'ProductVariantSubscriptionPlanPricing' }
              & { priceVariants?: Types.Maybe<Array<(
                { __typename?: 'ProductPriceVariant' }
                & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
              )>>, meteredVariables?: Types.Maybe<Array<(
                { __typename?: 'ProductVariantSubscriptionMeteredVariable' }
                & Pick<Types.ProductVariantSubscriptionMeteredVariable, 'id' | 'name' | 'identifier' | 'tierType'>
                & { tiers: Array<(
                  { __typename?: 'ProductVariantSubscriptionPlanTier' }
                  & Pick<Types.ProductVariantSubscriptionPlanTier, 'threshold' | 'price'>
                  & { priceVariants?: Types.Maybe<Array<(
                    { __typename?: 'ProductPriceVariant' }
                    & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
                  )>> }
                )> }
              )>> }
            )> }
          )> }
        )>> }
      )>>, vatType?: Types.Maybe<(
        { __typename?: 'VatInfo' }
        & Pick<Types.VatInfo, 'name' | 'percent'>
      )> }
    )>> }
  ) | (
    { __typename?: 'Product' }
    & { children?: Types.Maybe<Array<{ __typename?: 'Document' } | { __typename?: 'Folder' } | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'id' | 'name' | 'type' | 'path' | 'isVirtual' | 'isSubscriptionOnly'>
      & { variants?: Types.Maybe<Array<(
        { __typename?: 'ProductVariant' }
        & Pick<Types.ProductVariant, 'id' | 'name' | 'sku' | 'price' | 'stock' | 'isDefault'>
        & { priceVariants?: Types.Maybe<Array<(
          { __typename?: 'ProductPriceVariant' }
          & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
        )>>, images?: Types.Maybe<Array<(
          { __typename?: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'key' | 'width' | 'url'>
          )>> }
        )>>, subscriptionPlans?: Types.Maybe<Array<(
          { __typename?: 'ProductVariantSubscriptionPlan' }
          & Pick<Types.ProductVariantSubscriptionPlan, 'identifier' | 'name'>
          & { periods: Array<(
            { __typename?: 'ProductVariantSubscriptionPlanPeriod' }
            & Pick<Types.ProductVariantSubscriptionPlanPeriod, 'id' | 'name'>
            & { initial?: Types.Maybe<(
              { __typename?: 'ProductVariantSubscriptionPlanPricing' }
              & { priceVariants?: Types.Maybe<Array<(
                { __typename?: 'ProductPriceVariant' }
                & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
              )>> }
            )>, recurring?: Types.Maybe<(
              { __typename?: 'ProductVariantSubscriptionPlanPricing' }
              & { priceVariants?: Types.Maybe<Array<(
                { __typename?: 'ProductPriceVariant' }
                & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
              )>>, meteredVariables?: Types.Maybe<Array<(
                { __typename?: 'ProductVariantSubscriptionMeteredVariable' }
                & Pick<Types.ProductVariantSubscriptionMeteredVariable, 'id' | 'name' | 'identifier' | 'tierType'>
                & { tiers: Array<(
                  { __typename?: 'ProductVariantSubscriptionPlanTier' }
                  & Pick<Types.ProductVariantSubscriptionPlanTier, 'threshold' | 'price'>
                  & { priceVariants?: Types.Maybe<Array<(
                    { __typename?: 'ProductPriceVariant' }
                    & Pick<Types.ProductPriceVariant, 'identifier' | 'name' | 'price' | 'currency'>
                  )>> }
                )> }
              )>> }
            )> }
          )> }
        )>> }
      )>>, vatType?: Types.Maybe<(
        { __typename?: 'VatInfo' }
        & Pick<Types.VatInfo, 'name' | 'percent'>
      )> }
    )>> }
  )> }
);


export const AllPlansDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPlans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catalogue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/pricing-page","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"StringValue","value":"en","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"isVirtual"}},{"kind":"Field","name":{"kind":"Name","value":"isSubscriptionOnly"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stock"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionPlans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"periods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"initial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"recurring"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meteredVariables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"tiers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tierType"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vatType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllPlansQuery, AllPlansQueryVariables>;