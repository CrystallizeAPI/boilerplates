import * as Types from '../types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AllCategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = (
  { __typename?: 'Query' }
  & { blog?: Types.Maybe<(
    { __typename?: 'Document' }
    & { categories?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'path'>
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'path'>
    ) | (
      { __typename?: 'Product' }
      & Pick<Types.Product, 'path'>
    )>> }
  ) | (
    { __typename?: 'Folder' }
    & { categories?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'path'>
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'path'>
    ) | (
      { __typename?: 'Product' }
      & Pick<Types.Product, 'path'>
    )>> }
  ) | (
    { __typename?: 'Product' }
    & { categories?: Types.Maybe<Array<(
      { __typename?: 'Document' }
      & Pick<Types.Document, 'path'>
    ) | (
      { __typename?: 'Folder' }
      & Pick<Types.Folder, 'path'>
    ) | (
      { __typename?: 'Product' }
      & Pick<Types.Product, 'path'>
    )>> }
  )> }
);


export const AllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"blog"},"name":{"kind":"Name","value":"catalogue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"StringValue","value":"/blog","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"language"},"value":{"kind":"StringValue","value":"en","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"categories"},"name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<AllCategoriesQuery, AllCategoriesQueryVariables>;