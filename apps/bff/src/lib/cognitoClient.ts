import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import {createHmac} from "node:crypto";

export const cognitoClient = new CognitoIdentityProviderClient({
  credentials: {
    accessKeyId: process.env.AWS_USER_POOL_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_USER_POOL_SECRET_ACCESS_KEY,
  },
  region: 'ap-northeast-1',
});

export const createCognitoSecretHash = (username: string) => {
  const clientId = process.env.AWS_COGNITO_CLIENT_ID;
  const clientSecret = process.env.AWS_COGNITO_CLIENT_SECRET;
  return createHmac('sha256', clientSecret)
    .update(username + clientId)
    .digest('base64');
};
