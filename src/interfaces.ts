export enum ConnectionMethod {
  Local = 'local',
  ServiceAccount = 'serviceAccount',
  Credentials = 'credentials',
}

export type ClientOptions = {
  host: string;
  connectionMethod: ConnectionMethod.Local;
} | {
  host: string;
  connectionMethod: ConnectionMethod.ServiceAccount;
  region: string;
  credentials: {
    arn: string;
    tokenFile: string;
  },
} | {
  host: string;
  connectionMethod: ConnectionMethod.Credentials;
  region: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  }
};
