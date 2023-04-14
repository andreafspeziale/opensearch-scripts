import * as dotenv from 'dotenv';
import * as aws4 from 'aws4';
import { Connection, Client } from '@opensearch-project/opensearch';
import { fromTokenFile } from '@aws-sdk/credential-providers';
import { AwsCredential } from './interfaces';

dotenv.config();

export const createAwsConnector = (
  credentials: AwsCredential,
  region: string,
  serverless: boolean,
): { Connection: typeof Connection } => {
  class AmazonConnection extends Connection {
    buildRequestObject(params: any) {
      const {
        host, hostname, path, headers, ...rest
      } = super.buildRequestObject(params);

      const awsRequest: aws4.Request = {
        ...(host === null || undefined ? {} : { host }),
        ...(hostname === null || undefined ? {} : { hostname }),
        ...(path === null || undefined ? {} : { path }),
        ...(serverless ? { service: 'aoss' } : { service: 'es' }),
        region,
        headers: {
          ...headers,
          ...(host === null || undefined
            ? {}
            : {
              ...(hostname === null || undefined ? {} : { host: hostname }),
            }),
          ...(serverless ? { 'x-amz-content-sha256': 'UNSIGNED-PAYLOAD' } : {}),
        },
        ...rest,
      };

      return aws4.sign(awsRequest, credentials);
    }
  }
  return {
    Connection: AmazonConnection,
  };
};

export const getClient = async (
  credentialsFromServiceAccount: boolean,
  region: string,
  host: string,
  serverless: boolean,
) => {
  let credentials: AwsCredential;

  if (credentialsFromServiceAccount) {
    credentials = await fromTokenFile({
      roleArn: process.env.AWS_ROLE_ARN as string,
      webIdentityTokenFile: process.env.AWS_WEB_IDENTITY_TOKEN_FILE as string,
    })();
  } else {
    credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY as string,
      secretAccessKey: process.env.AWS_SECRET_KEY as string,
    };
  }

  return new Client({
    ...createAwsConnector(credentials, region, serverless),
    node: host,
  });
};
