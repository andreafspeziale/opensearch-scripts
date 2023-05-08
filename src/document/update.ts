import {
  buildClientFromEnv, INDEX, UPDATE_DOC,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.update({
      index: INDEX,
      ...UPDATE_DOC,
    });

    console.log('Update document response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
