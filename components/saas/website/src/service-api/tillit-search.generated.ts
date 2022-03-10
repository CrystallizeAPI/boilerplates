import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type TillitSearchQueryVariables = Types.Exact<{
  searchTerm: Types.Scalars['String'];
  locale: Types.LocaleInput;
}>;


export type TillitSearchQuery = (
  { __typename?: 'Query' }
  & { paymentProviders: (
    { __typename?: 'PaymentProvidersQueries' }
    & { tillit: (
      { __typename?: 'TillitPaymentProvider' }
      & { search: (
        { __typename?: 'TillitSearchResponse' }
        & Pick<Types.TillitSearchResponse, 'success'>
        & { data?: Types.Maybe<Array<Types.Maybe<(
          { __typename?: 'TillitCompany' }
          & Pick<Types.TillitCompany, 'id' | 'name' | 'highlight'>
        )>>> }
      ) }
    ) }
  ) }
);


export const TillitSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TillitSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tillit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"highlight"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TillitSearchQuery, TillitSearchQueryVariables>;