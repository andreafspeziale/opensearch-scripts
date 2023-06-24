import {
  INDEX,
  buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.indices.open({
      index: INDEX,
    });

    console.log(`Open ${INDEX} index response: `, res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
