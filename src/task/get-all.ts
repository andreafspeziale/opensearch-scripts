import {
  buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.cat.tasks();

    console.log('Get tasks response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
