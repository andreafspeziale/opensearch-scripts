import {
  REPOSITORY_NAME,
  SNAPSHOT_NAME,
  SNAPSHOT_NAME_NONCE,
  buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.snapshot.status({
      repository: REPOSITORY_NAME,
      snapshot: `${SNAPSHOT_NAME}-${SNAPSHOT_NAME_NONCE}`,
    });

    console.log('Get snapshot status response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
