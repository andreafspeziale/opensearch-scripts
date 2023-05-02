import {
  buildClientFromEnv, INDEX,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.indices.delete({ index: INDEX });

    console.log('Delete index response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
