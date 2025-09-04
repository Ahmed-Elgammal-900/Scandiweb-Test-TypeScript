import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${import.meta.env.VITE_API_URL}/graphql`,
  }),
  cache: new InMemoryCache({
    typePolicies: {
      AttributeSet: {
        keyFields: false,
      },
      Attribute: {
        keyFields: false,
      },
    },
  }),
});
