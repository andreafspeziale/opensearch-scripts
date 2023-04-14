# Opensearch scripts

Fast and easy to use opensearch connection and operations scripts

## Quickstart

- `$ cp ./env/.env.development .env`
- `$ npm i`
- `$ npm run create:index`
- `$ npm run create:doc`
- `$ npm run query:doc`

## Example

![example](./example.png)

### Environment

- `OPENSEARCH_HOST`

Description: your opensearch instance host.

- `OPENSEARCH_SERVERLESS`

Description: sets opensearch client accordingly.

- `CREDENTIALS_FROM_SERVICE_ACCOUNT`

Description: in case scripts are used in a Kubernetes env which leverages service accounts.

- `AWS_ACCESS_KEY`

Description: in case your are not using Kubernetes and/or service accounts to inject credentilas in your pod.

- `AWS_SECRET_KEY`

Description: in case your are not using Kubernetes and/or service accounts to inject credentilas in your pod.

- `AWS_REGION`

Description: in case your are not using Kubernetes and/or service accounts to inject credentilas in your pod.

### Configuration

The `./src/config.ts` file contains some constants that you can change as you wish in order to manage opensearch indexes, docs and queries.
