import {
  getClient, INDEX, DOCS,
} from '..';

(async () => {
  try {
    const client = await getClient(
      process.env.CREDENTIALS_FROM_SERVICE_ACCOUNT === 'true',
      (process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION) as string,
      process.env.OPENSEARCH_HOST as string,
      process.env.OPENSEARCH_SERVERLESS === 'true',
    );

    const promises = DOCS.map((doc) => client.index({
      index: INDEX,
      body: doc,
    }));

    const results = await Promise.all(promises);

    results.forEach((res) => {
      console.log('Create document response: ', res.body);
    });
  } catch (error: any) {
    console.error('Error: ', error);
  }
})();
