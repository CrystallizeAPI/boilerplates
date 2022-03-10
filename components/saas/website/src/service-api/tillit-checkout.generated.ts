import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type TillitCheckoutMutationVariables = Types.Exact<{
  checkoutModel: Types.CheckoutModelInput;
  tillitInput: Types.TillitCheckoutInput;
  baseUrl: Types.Scalars['String'];
}>;


export type TillitCheckoutMutation = (
  { __typename?: 'Mutation' }
  & { paymentProviders: (
    { __typename?: 'PaymentProvidersMutations' }
    & { tillit: (
      { __typename?: 'TillitMutation' }
      & { checkout?: Types.Maybe<(
        { __typename?: 'TillitCheckoutResponse' }
        & Pick<Types.TillitCheckoutResponse, 'success' | 'paymentUrl'>
      )> }
    ) }
  ) }
);


export const TillitCheckoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TillitCheckout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutModel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutModelInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tillitInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TillitCheckoutInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"baseUrl"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tillit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutModel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutModel"}}},{"kind":"Argument","name":{"kind":"Name","value":"tillitInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tillitInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"baseUrl"},"value":{"kind":"Variable","name":{"kind":"Name","value":"baseUrl"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"paymentUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TillitCheckoutMutation, TillitCheckoutMutationVariables>;