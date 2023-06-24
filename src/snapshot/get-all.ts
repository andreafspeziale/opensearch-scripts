import {
  REPOSITORY_NAME,
  buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.snapshot.get({
      repository: REPOSITORY_NAME,
      snapshot: '_all',
    });

    console.log('Get snapshots from repository response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
