import {
  buildClientFromEnv,
  INDEX,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.count({
      index: INDEX,
    });

    console.log('Documents count response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
