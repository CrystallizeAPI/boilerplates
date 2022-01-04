import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AllProductsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllProductsQuery = (
  { __typename?: 'Query' }
  & { catalogue?: Types.Maybe<(
    { __typename?: 'Document' }
    & { children?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'path'>
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'path'>
    ) | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'id' | 'name' | 'type' | 'path' | 'isVirtual' | 'isSubscriptionOnly'>
      & { defaultVariant?: Types.Maybe<(
        { __typename?: 'ProductVariant' }
        & { firstImage?: Types.Maybe<(
          { __typename?: 'Image' }
          & Pick<Types.Image, 'url' | 'altText'>
        )> }
      )>, variants?: Types.Maybe<Array<(
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
        )>> }
      )>>, vatType?: Types.Maybe<(
        { __typename?: 'VatInfo' }
        & Pick<Types.VatInfo, 'name' | 'percent'>
      )> }
    )>> }
  ) | (
    { __typename?: 'Folder' }
    & { children?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'path'>
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'path'>
    ) | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'id' | 'name' | 'type' | 'path' | 'isVirtual' | 'isSubscriptionOnly'>
      & { defaultVariant?: Types.Maybe<(
        { __typename?: 'ProductVariant' }
        & { firstImage?: Types.Maybe<(
          { __typename?: 'Image' }
          & Pick<Types.Image, 'url' | 'altText'>
        )> }
      )>, variants?: Types.Maybe<Array<(
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
        )>> }
      )>>, vatType?: Types.Maybe<(
        { __typename?: 'VatInfo' }
        & Pick<Types.VatInfo, 'name' | 'percent'>
      )> }
    )>> }
  ) | (
    { __typename?: 'Product' }
    & { children?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'path'>
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'path'>
    ) | (
      { __typename: 'Product' }
      & Pick<Types.Product, 'id' | 'name' | 'type' | 'path' | 'isVirtual' | 'isSubscriptionOnly'>
      & { defaultVariant?: Types.Maybe<(
        { __typename?: 'ProductVariant' }
        & { firstImage?: Types.Maybe<(
          { __typename?: 'Image' }
          & Pick<Types.Image, 'url' | 'altText'>
        )> }
      )>, variants?: Types.Maybe<Array<(
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
        )>> }
      )>>, vatType?: Types.Maybe<(
        { __typename?: 'VatInfo' }
        & Pick<Types.VatInfo, 'name' | 'percent'>
      )> }
    )>> }
  )> }
);


export const AllProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catalogue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/merch","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"StringValue","value":"en","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"isVirtual"}},{"kind":"Field","name":{"kind":"Name","value":"isSubscriptionOnly"}},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stock"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vatType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllProductsQuery, AllProductsQueryVariables>;