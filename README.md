# Opensearch scripts

Fast and easy to use opensearch connection and operations scripts

## Quickstart

- `$ cp ./env/.env.development .env`
- `$ cp ./src/config.example.ts ./src/config.ts`
- `$ docker compose up -d`

> Eventually reload the TS server

- `$ pnpm i`
- `$ pnpm -s create:index`
- `$ pnpm -s create:doc`
- `$ pnpm -s query:doc`

Check the available scripts in the `package.json` scripts section.

## Example

![example](./example.png)

## Docker

The docker compose has been extracted and simplified from the [official documentation](https://opensearch.org/docs/latest/install-and-configure/install-opensearch/docker/#sample-docker-compose-file-for-development).

## Environment variables

- `OPENSEARCH_HOST`

Required: _true_ \
Description: your opensearch instance host.

- `CONNECTION_METHOD`

Required: _true_ \
Description: sets opensearch client accordingly. \
Values: [`local`, `serviceAccount`, `credentials`]

> `local` when using Docker locally or when using an `AwsSigv4` [proxy](https://github.com/awslabs/aws-sigv4-proxy)

- `AWS_REGION | AWS_DEFAULT_REGION`

Required: when _CONNECTION_METHOD_ is _serviceAccount_ or _credentials_ \
Description: the AWS region.

- `AWS_ROLE_ARN`

Required: when _CONNECTION_METHOD_ is _serviceAccount_ \
Description: the AWS role ARN injected by the serviceAccount.

- `AWS_WEB_IDENTITY_TOKEN_FILE`

Required: when _CONNECTION_METHOD_ is _serviceAccount_ \
Description: the AWS web identity toke file injected by the serviceAccount.

- `AWS_ACCESS_KEY_ID`

Required: when _CONNECTION_METHOD_ is _credentials_ \
Description: the AWS access key Id.

- `AWS_SECRET_ACCESS_KEY`

Required: when _CONNECTION_METHOD_ is _credentials_ \
Description: the AWS secret access key.
