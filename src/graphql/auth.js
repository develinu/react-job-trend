import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { config } from '../aws-exports';

export const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: config.aws_appsync_apiKey,
  },
})