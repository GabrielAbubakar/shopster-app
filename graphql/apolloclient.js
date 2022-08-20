import { InMemoryCache, ApolloClient, HttpLink } from "@apollo/client";
import { fetch } from 'cross-fetch'

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/', fetch }),
    cache: new InMemoryCache({
        dataIdFromObject: (o) => (o._id ? `${o.__typename}:${o._id}` : null),
    }),
});

export default client;