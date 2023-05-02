import {
  buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.cat.indices({ format: 'json' });

    console.log('List index response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
