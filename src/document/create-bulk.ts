import {
  INDEX, DOCS, buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const bulkPayload = [];

    for (let i = 0; i < DOCS.length; i += 1) {
      bulkPayload.push({ index: { _index: INDEX } });
      bulkPayload.push(DOCS[i]);
    }

    const res = await client.bulk({
      body: bulkPayload,
    });

    console.log('Create document in bulk response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
