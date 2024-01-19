import { Request, Response } from 'express';

import {
  AdminInitiateAuthCommand,
  AdminInitiateAuthRequest,
} from '@aws-sdk/client-cognito-identity-provider';

import {ash, cognitoClient, createCognitoSecretHash} from '../lib';
import {jwtDecode} from "jwt-decode";

type ReqBody = {
  email: string;
  password: string;
};

type ResBody = {
  token: string | null;
};

export const signIn = ash(async (req: Request<unknown, unknown, ReqBody>, res: Response<ResBody>) => {
  const { email, password } = req.body;
  const input: AdminInitiateAuthRequest = {
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
    AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
      SECRET_HASH: createCognitoSecretHash(email),
    },
  };
  const command = new AdminInitiateAuthCommand(input);
  const clientResponse = await cognitoClient.send(command);
  const token = clientResponse.AuthenticationResult?.IdToken;

  res.status(200).json({
    token: token ? jwtDecode(token) : null
  });
});
