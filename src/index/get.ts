import {
  buildClientFromEnv, INDEX,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.indices.get({ index: INDEX });

    console.log('Get index response: ', res.body);
    console.log('Get index response, mappings: ', res.body[INDEX].mappings.properties);
    console.log('Get index response, settings: ', res.body[INDEX].settings.index);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
