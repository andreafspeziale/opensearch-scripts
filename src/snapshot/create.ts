import {
  buildClientFromEnv,
  REPOSITORY_NAME,
  SNAPSHOT_NAME,
  SNAPSHOT_NAME_NONCE,
  WAIT_FOR_COMPLETION,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.snapshot.create({
      repository: `${REPOSITORY_NAME}`,
      snapshot: `${SNAPSHOT_NAME}-${SNAPSHOT_NAME_NONCE}`,
      wait_for_completion: WAIT_FOR_COMPLETION,
    });

    console.log('Create snapshot response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
