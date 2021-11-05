import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type UpdatePaymentMethodMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  paymentMethodId: Types.Scalars['String'];
}>;


export type UpdatePaymentMethodMutation = (
  { __typename?: 'Mutation' }
  & { subscription?: Types.Maybe<(
    { __typename?: 'SubscriptionMutations' }
    & Pick<Types.SubscriptionMutations, 'updatePaymentMethod'>
  )> }
);


export const UpdatePaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}}}]}]}}]}}]} as unknown as DocumentNode<UpdatePaymentMethodMutation, UpdatePaymentMethodMutationVariables>;