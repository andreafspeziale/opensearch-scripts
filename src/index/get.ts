import {
  getClient, INDEX,
} from '..';

(async () => {
  try {
    const client = await getClient(
      process.env.CREDENTIALS_FROM_SERVICE_ACCOUNT === 'true',
      (process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION) as string,
      process.env.OPENSEARCH_HOST as string,
      process.env.OPENSEARCH_SERVERLESS === 'true',
    );

    const res = await client.indices.get({ index: INDEX });

    console.log('Get index response: ', res.body);
    console.log('Get index response, mappings: ', JSON.stringify(res.body[INDEX].mappings.properties));
    console.log('Get index response, settings: ', res.body[INDEX].settings.index);
  } catch (error: any) {
    console.error('Error: ', error);
  }
})();
