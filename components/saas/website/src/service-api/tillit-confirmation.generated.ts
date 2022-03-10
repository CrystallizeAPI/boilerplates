import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type TillitConfirmationQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type TillitConfirmationQuery = (
  { __typename?: 'Query' }
  & { paymentProviders: (
    { __typename?: 'PaymentProvidersQueries' }
    & { tillit: (
      { __typename?: 'TillitPaymentProvider' }
      & Pick<Types.TillitPaymentProvider, 'confirmation'>
    ) }
  ) }
);


export const TillitConfirmationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TillitConfirmation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tillit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]}}]}}]} as unknown as DocumentNode<TillitConfirmationQuery, TillitConfirmationQueryVariables>;