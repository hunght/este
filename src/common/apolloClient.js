import ApolloClient, { createNetworkInterface } from 'apollo-client';

const url = 'http://api.ferosh.vn/api/graphql';
// const url = 'http://localhost:4000/graphql';
// const networkInterface = createNetworkInterface({ uri: url });
const networkInterface = createNetworkInterface({
  uri: url,
  opts: {
    credentials: 'same-origin',
  },
  transportBatching: true,
});

const client = new ApolloClient({
  networkInterface,
});

// Sample error handling middleware
networkInterface.useAfter([
  {
    applyAfterware({ response }, next) {
      if (response.errors) {
        if (typeof window !== 'undefined') {
          console.log(`There was an error in your GraphQL request: ${response.errors[0].message}`);
        }
      }
      next();
    },
  },
]);

export default client;
