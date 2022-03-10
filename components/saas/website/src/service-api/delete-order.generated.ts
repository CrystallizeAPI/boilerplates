import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type DeleteOrderMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type DeleteOrderMutation = (
  { __typename?: 'Mutation' }
  & { order?: Types.Maybe<(
    { __typename?: 'OrderMutations' }
    & Pick<Types.OrderMutations, 'delete'>
  )> }
);


export const DeleteOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]}}]} as unknown as DocumentNode<DeleteOrderMutation, DeleteOrderMutationVariables>;