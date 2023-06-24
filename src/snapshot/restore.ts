import {
  REPOSITORY_NAME,
  SNAPSHOT_NAME,
  SNAPSHOT_NAME_NONCE,
  INDEX,
  buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.snapshot.restore({
      repository: REPOSITORY_NAME,
      snapshot: `${SNAPSHOT_NAME}-${SNAPSHOT_NAME_NONCE}`,
      body: {
        indices: INDEX,
      },
    });

    console.log(`Restire snapshot ${SNAPSHOT_NAME}-${SNAPSHOT_NAME_NONCE} from repository ${REPOSITORY_NAME} response: `, res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
