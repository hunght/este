import ApolloClient, { createNetworkInterface, addTypeName } from 'apollo-client';

const url = 'http://ferosh.vn:8080/api/graphiql';
const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });
const client = new ApolloClient({
  networkInterface,
  queryTransformer: addTypeName,
});
// Sample error handling middleware
networkInterface.useAfter([
  {
    applyAfterware({ response }, next) {
      console.log('fdsfjhdsjkfhdjsvnjkdshvkdsf ============');
      console.log(response);
      if (response.errors) {
        console.log('fdsfjhdsjkfhdjsvnjkdshvkdsf ============');
        console.log(`There was an error in your GraphQL request: ${response.errors[0].message}`);
        if (typeof window !== 'undefined') {
          console.log('fdsfjhdsjkfhdjsvnjkdshvkdsf ============');
          console.log(`There was an error in your GraphQL request: ${response.errors[0].message}`);
        }
      }
      next();
    },
  },
]);

export default client;
