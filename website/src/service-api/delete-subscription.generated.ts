import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type DeleteSubscriptionContractMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type DeleteSubscriptionContractMutation = (
  { __typename?: 'Mutation' }
  & { subscriptionContracts?: Types.Maybe<(
    { __typename?: 'SubscriptionContractMutations' }
    & Pick<Types.SubscriptionContractMutations, 'delete'>
  )> }
);


export const DeleteSubscriptionContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSubscriptionContract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionContracts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]}}]} as unknown as DocumentNode<DeleteSubscriptionContractMutation, DeleteSubscriptionContractMutationVariables>;