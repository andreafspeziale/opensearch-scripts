import {
  buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.snapshot.getRepository({
      repository: '_all',
    });

    console.log('Get repositories response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
