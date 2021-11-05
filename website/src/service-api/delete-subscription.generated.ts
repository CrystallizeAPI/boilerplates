import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type DeleteSubscriptionMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type DeleteSubscriptionMutation = (
  { __typename?: 'Mutation' }
  & { subscription?: Types.Maybe<(
    { __typename?: 'SubscriptionMutations' }
    & Pick<Types.SubscriptionMutations, 'delete'>
  )> }
);


export const DeleteSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]}}]} as unknown as DocumentNode<DeleteSubscriptionMutation, DeleteSubscriptionMutationVariables>;