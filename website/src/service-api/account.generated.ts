import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AccountQueryVariables = Types.Exact<{
  customerIdentifier: Types.Scalars['String'];
}>;


export type AccountQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<Types.User, 'email' | 'firstName' | 'lastName' | 'phone'>
  ), orders: (
    { __typename?: 'OrderQueries' }
    & { data: Types.OrderQueries['getByCustomer'] }
  ), subscriptionContracts: (
    { __typename?: 'SubscriptionContractQueries' }
    & { data: Types.SubscriptionContractQueries['getByCustomer'] }
  ) }
);


export const AccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Account"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerIdentifier"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"getByCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerIdentifier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerIdentifier"}}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"getByCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerIdentifier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerIdentifier"}}}]}]}}]}}]} as unknown as DocumentNode<AccountQuery, AccountQueryVariables>;