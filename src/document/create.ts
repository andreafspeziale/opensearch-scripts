import {
  buildClientFromEnv, INDEX, DOC,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.index({
      index: INDEX,
      body: DOC,
    });

    console.log('Create document response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
