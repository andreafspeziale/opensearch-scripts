import * as dotenv from 'dotenv';
import { Client } from '@opensearch-project/opensearch';
import { AwsSigv4Signer } from '@opensearch-project/opensearch/aws';
import { fromTokenFile } from '@aws-sdk/credential-providers';
import { ClientOptions, ConnectionMethod } from './interfaces';

dotenv.config();

const validateEnv = (env: string | undefined, prop: string) => {
  if (!env || env === '') {
    throw new Error(`${prop} is not defined`);
  } else {
    return env;
  }
};

export const getClient = async (options: ClientOptions) => {
  if (options.connectionMethod === ConnectionMethod.Local) {
    return new Client({
      node: options.host,
    });
  }

  if (options.connectionMethod === ConnectionMethod.ServiceAccount) {
    return new Client({
      ...AwsSigv4Signer({
        region: options.region,
        getCredentials: async () => fromTokenFile({
          roleArn: options.credentials.arn,
          webIdentityTokenFile: options.credentials.tokenFile,
        })(),
      }),
      node: options.host,
    });
  }

  if (options.connectionMethod === ConnectionMethod.Credentials) {
    return new Client({
      ...AwsSigv4Signer({
        region: options.region,
        getCredentials: async () => ({
          accessKeyId: options.credentials.accessKeyId,
          secretAccessKey: options.credentials.secretAccessKey,
        }),
      }),
      node: options.host,
    });
  }

  throw new Error('Invalid connection method');
};

export const buildClientFromEnv = async () => {
  const host = validateEnv(process.env.OPENSEARCH_HOST, 'OPENSEARCH_HOST');
  const connectionMethod = validateEnv(process.env.CONNECTION_METHOD, 'CONNECTION_METHOD') as ConnectionMethod;

  if (connectionMethod === ConnectionMethod.Local) {
    return getClient({
      host,
      connectionMethod,
    });
  }

  if (connectionMethod === ConnectionMethod.ServiceAccount) {
    return getClient({
      host,
      connectionMethod,
      region: validateEnv(process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION, 'AWS_REGION | AWS_DEFAULT_REGION'),
      credentials: {
        arn: validateEnv(process.env.AWS_ROLE_ARN, 'AWS_ROLE_ARN'),
        tokenFile: validateEnv(process.env.AWS_WEB_IDENTITY_TOKEN_FILE, 'AWS_WEB_IDENTITY_TOKEN_FILE'),
      },
    });
  }

  if (connectionMethod === ConnectionMethod.Credentials) {
    return getClient({
      host,
      connectionMethod,
      region: validateEnv(process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION, 'AWS_REGION | AWS_DEFAULT_REGION'),
      credentials: {
        accessKeyId: validateEnv(process.env.AWS_ACCESS_KEY_ID, 'AWS_ACCESS_KEY_ID'),
        secretAccessKey: validateEnv(process.env.AWS_SECRET_ACCESS_KEY, 'AWS_SECRET_ACCESS_KEY'),
      },
    });
  }

  throw new Error('Invalid connection method');
};
