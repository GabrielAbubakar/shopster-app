import { InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://scandiwebserve.herokuapp.com/',
    cache: new InMemoryCache()
});

export default client;