import { chain } from 'lodash';
import {
  buildClientFromEnv,
  INDEX,
} from '..';

(async () => {
  try {
    const client = await buildClientFromEnv();

    const res = await client.cat.shards({ format: 'json' });
    const shards = res.body.filter(({ index }: { index: string; }) => index === INDEX);
    const shardSizes = shards.map(({ shard, store: size }: { shard: string; store: string; }) => ({
      shard,
      size,
    }));
    const uniqueSortedShards = chain(shardSizes)
      .sortBy('shard')
      .uniqBy('shard')
      .value();

    console.log('Get shards size response: ', uniqueSortedShards);
  } catch (error) {
    console.error('Error: ', error);
  }
})();
