declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'production' | 'development';
    AWS_USER_POOL_ACCESS_KEY_ID: string;
    AWS_USER_POOL_SECRET_ACCESS_KEY: string;
    AWS_COGNITO_USER_POOL_ID: string;
    AWS_COGNITO_CLIENT_ID: string;
    AWS_COGNITO_CLIENT_SECRET: string;
  }
}
