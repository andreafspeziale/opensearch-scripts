import {
  getClient,
} from '..';

(async () => {
  try {
    const client = await getClient(
      process.env.CREDENTIALS_FROM_SERVICE_ACCOUNT === 'true',
      (process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION) as string,
      process.env.OPENSEARCH_HOST as string,
      process.env.OPENSEARCH_SERVERLESS === 'true',
    );

    const res = await client.cat.indices({ format: 'json' });

    console.log('List index response: ', res.body);
  } catch (error: any) {
    console.error('Error: ', error);
  }
})();
