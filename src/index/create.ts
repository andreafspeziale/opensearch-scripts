import {
  INDEX, SETTINGS, MAPPING, buildClientFromEnv,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.indices.create({
      index: INDEX,
      body: { ...SETTINGS, ...MAPPING },
    });

    console.log('Create index response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
