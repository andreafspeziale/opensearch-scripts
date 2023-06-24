import {
  buildClientFromEnv, INDEX, MDOCS,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.mget({
      index: INDEX,
      body: {
        docs: MDOCS,
      },
    });

    console.log('Mget document response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
