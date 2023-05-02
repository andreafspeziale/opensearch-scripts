import {
  buildClientFromEnv, INDEX, QUERY,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.search({
      index: INDEX,
      body: QUERY,
    });

    console.log('Query document response: ', res.body);
    console.log('Query document response: ', res.body.hits.hits);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
