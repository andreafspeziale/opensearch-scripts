import {
  INDEX, SETTINGS_UPDATE, buildClientFromEnv, DYNAMIC_SETTINGS,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    let res;

    if (DYNAMIC_SETTINGS) {
      await client.indices.close({ index: INDEX });

      res = await client.indices.putSettings({
        index: INDEX,
        body: { ...SETTINGS_UPDATE },
      });

      await client.indices.open({ index: INDEX });
    } else {
      res = await client.indices.putSettings({
        index: INDEX,
        body: { ...SETTINGS_UPDATE },
      });
    }

    console.log('Update settings response: ', res.body);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
