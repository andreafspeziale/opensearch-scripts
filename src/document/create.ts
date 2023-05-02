import {
  INDEX, DOCS, buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const promises = DOCS.map((doc) => client.index({
      index: INDEX,
      body: doc,
    }));

    const results = await Promise.all(promises);

    results.forEach((res) => {
      console.log('Create document response: ', res.body);
    });
  } catch (error) {
    console.error('Error: ', error);
  }
})();
