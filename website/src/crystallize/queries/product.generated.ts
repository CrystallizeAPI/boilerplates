import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { ComponentFragmentDoc, ContentFragmentDoc } from '../fragments/content.generated';
export type ProductQueryVariables = Types.Exact<{
  path: Types.Scalars['String'];
}>;


export type ProductQuery = (
  { __typename?: 'Query' }
  & { product?: Types.Maybe<(
    { __typename?: 'Document' }
    & { component?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )> }
  ) | (
    { __typename?: 'Folder' }
    & { component?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )> }
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
    )>, component?: Types.Maybe<(
      { __typename: 'Component' }
      & { content?: Types.Maybe<(
        { __typename: 'BooleanContent' }
        & Pick<Types.BooleanContent, 'value'>
      ) | { __typename?: 'ComponentChoiceContent' } | (
        { __typename: 'ContentChunkContent' }
        & { chunks: Array<Array<(
          { __typename?: 'Component' }
          & { content?: Types.Maybe<(
            { __typename: 'BooleanContent' }
            & Pick<Types.BooleanContent, 'value'>
          ) | { __typename?: 'ComponentChoiceContent' } | { __typename?: 'ContentChunkContent' } | (
            { __typename: 'DatetimeContent' }
            & Pick<Types.DatetimeContent, 'datetime'>
          ) | { __typename?: 'GridRelationsContent' } | (
            { __typename: 'ImageContent' }
            & { images?: Types.Maybe<Array<(
              { __typename: 'Image' }
              & Pick<Types.Image, 'url' | 'altText' | 'key'>
              & { variants?: Types.Maybe<Array<(
                { __typename?: 'ImageVariant' }
                & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
              )>> }
            )>> }
          ) | { __typename?: 'ItemRelationsContent' } | (
            { __typename: 'LocationContent' }
            & Pick<Types.LocationContent, 'lat' | 'long'>
          ) | (
            { __typename: 'NumericContent' }
            & Pick<Types.NumericContent, 'number' | 'unit'>
          ) | (
            { __typename: 'ParagraphCollectionContent' }
            & { paragraphs?: Types.Maybe<Array<(
              { __typename?: 'ParagraphContent' }
              & { title?: Types.Maybe<(
                { __typename: 'SingleLineContent' }
                & Pick<Types.SingleLineContent, 'text'>
              )>, body?: Types.Maybe<(
                { __typename: 'RichTextContent' }
                & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
              )>, images?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { caption?: Types.Maybe<(
                  { __typename: 'RichTextContent' }
                  & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
                )>, variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          ) | (
            { __typename: 'PropertiesTableContent' }
            & { sections?: Types.Maybe<Array<(
              { __typename: 'PropertiesTableSection' }
              & Pick<Types.PropertiesTableSection, 'title'>
              & { properties?: Types.Maybe<Array<(
                { __typename?: 'PropertiesTableValue' }
                & Pick<Types.PropertiesTableValue, 'key' | 'value'>
              )>> }
            )>> }
          ) | (
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          ) | (
            { __typename: 'SelectionContent' }
            & { options?: Types.Maybe<Array<(
              { __typename?: 'SelectionComponentOption' }
              & Pick<Types.SelectionComponentOption, 'key' | 'value'>
            )>> }
          ) | (
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          ) | (
            { __typename: 'VideoContent' }
            & { videos?: Types.Maybe<Array<(
              { __typename: 'Video' }
              & Pick<Types.Video, 'id' | 'title' | 'playlists'>
              & { thumbnails?: Types.Maybe<Array<(
                { __typename: 'Image' }
                & Pick<Types.Image, 'url' | 'altText' | 'key'>
                & { variants?: Types.Maybe<Array<(
                  { __typename?: 'ImageVariant' }
                  & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
                )>> }
              )>> }
            )>> }
          )> }
        )>> }
      ) | (
        { __typename: 'DatetimeContent' }
        & Pick<Types.DatetimeContent, 'datetime'>
      ) | { __typename?: 'GridRelationsContent' } | (
        { __typename: 'ImageContent' }
        & { images?: Types.Maybe<Array<(
          { __typename: 'Image' }
          & Pick<Types.Image, 'url' | 'altText' | 'key'>
          & { variants?: Types.Maybe<Array<(
            { __typename?: 'ImageVariant' }
            & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
          )>> }
        )>> }
      ) | { __typename?: 'ItemRelationsContent' } | (
        { __typename: 'LocationContent' }
        & Pick<Types.LocationContent, 'lat' | 'long'>
      ) | (
        { __typename: 'NumericContent' }
        & Pick<Types.NumericContent, 'number' | 'unit'>
      ) | (
        { __typename: 'ParagraphCollectionContent' }
        & { paragraphs?: Types.Maybe<Array<(
          { __typename?: 'ParagraphContent' }
          & { title?: Types.Maybe<(
            { __typename: 'SingleLineContent' }
            & Pick<Types.SingleLineContent, 'text'>
          )>, body?: Types.Maybe<(
            { __typename: 'RichTextContent' }
            & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
          )>, images?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { caption?: Types.Maybe<(
              { __typename: 'RichTextContent' }
              & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
            )>, variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      ) | (
        { __typename: 'PropertiesTableContent' }
        & { sections?: Types.Maybe<Array<(
          { __typename: 'PropertiesTableSection' }
          & Pick<Types.PropertiesTableSection, 'title'>
          & { properties?: Types.Maybe<Array<(
            { __typename?: 'PropertiesTableValue' }
            & Pick<Types.PropertiesTableValue, 'key' | 'value'>
          )>> }
        )>> }
      ) | (
        { __typename: 'RichTextContent' }
        & Pick<Types.RichTextContent, 'json' | 'html' | 'plainText'>
      ) | (
        { __typename: 'SelectionContent' }
        & { options?: Types.Maybe<Array<(
          { __typename?: 'SelectionComponentOption' }
          & Pick<Types.SelectionComponentOption, 'key' | 'value'>
        )>> }
      ) | (
        { __typename: 'SingleLineContent' }
        & Pick<Types.SingleLineContent, 'text'>
      ) | (
        { __typename: 'VideoContent' }
        & { videos?: Types.Maybe<Array<(
          { __typename: 'Video' }
          & Pick<Types.Video, 'id' | 'title' | 'playlists'>
          & { thumbnails?: Types.Maybe<Array<(
            { __typename: 'Image' }
            & Pick<Types.Image, 'url' | 'altText' | 'key'>
            & { variants?: Types.Maybe<Array<(
              { __typename?: 'ImageVariant' }
              & Pick<Types.ImageVariant, 'url' | 'width' | 'key'>
            )>> }
          )>> }
        )>> }
      )> }
    )> }
  )> }
);


export const ProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"product"},"name":{"kind":"Name","value":"catalogue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"StringValue","value":"en","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"summary","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"component"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"isVirtual"}},{"kind":"Field","name":{"kind":"Name","value":"isSubscriptionOnly"}},{"kind":"Field","name":{"kind":"Name","value":"defaultVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stock"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vatType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"percent"}}]}}]}}]}}]}},...ComponentFragmentDoc.definitions]} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;