import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ChangePlanMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  plan: Types.Scalars['String'];
}>;


export type ChangePlanMutation = (
  { __typename?: 'Mutation' }
  & { subscription?: Types.Maybe<(
    { __typename?: 'SubscriptionMutations' }
    & Pick<Types.SubscriptionMutations, 'change'>
  )> }
);


export const ChangePlanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePlan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"plan"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"change"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"plan"},"value":{"kind":"Variable","name":{"kind":"Name","value":"plan"}}}]}]}}]}}]} as unknown as DocumentNode<ChangePlanMutation, ChangePlanMutationVariables>;