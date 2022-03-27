# Public Holidays

Show public holidays by country and year

## GraphQL client

as API to get the data GraphQL is used

### `codegen`

taken from https://www.apollographql.com/docs/react/development-testing/developer-tooling#generate

- `npm install -g apollo-codegen`
- `apollo-codegen introspect-schema http://localhost:4000 --output schema.json`
- `apollo-codegen generate **/*.graphql --schema schema.json --target typescript --output src/graphql/operation-result-types.ts`

