import {
  buildClientFromEnv, INDEX, DELETE_DOC_ID,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.delete({
      index: INDEX,
      id: DELETE_DOC_ID,
    });

    console.log('Delete document response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
