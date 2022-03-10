import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AuthQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AuthQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<Types.User, 'isLoggedIn' | 'logoutLink' | 'email' | 'hasActiveSubscriptionContract'>
  ) }
);


export const AuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isLoggedIn"}},{"kind":"Field","name":{"kind":"Name","value":"logoutLink"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"hasActiveSubscriptionContract"}}]}}]}}]} as unknown as DocumentNode<AuthQuery, AuthQueryVariables>;