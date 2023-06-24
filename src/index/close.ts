import {
  INDEX,
  buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.indices.close({
      index: INDEX,
    });

    console.log(`Close ${INDEX} index response: `, res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
