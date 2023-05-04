import {
  buildClientFromEnv,
  ConnectionMethod,
  REPOSITORY_NAME,
  validateEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    if (validateEnv(process.env.CONNECTION_METHOD, 'CONNECTION_METHOD') !== ConnectionMethod.Local) {
      throw new Error('Create a repository in this way is risky, I will support S3 soon');
    }

    const res = await client.snapshot.createRepository({
      repository: `${REPOSITORY_NAME}`,
      body: {
        type: 'fs',
        settings: {
          location: `/usr/share/opensearch/data/snapshots/${REPOSITORY_NAME}`,
        },
      },
    });

    console.log('Create repository response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
