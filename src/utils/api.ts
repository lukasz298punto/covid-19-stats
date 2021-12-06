import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export function createApolloClient(authToken: string) {
    return new ApolloClient({
        link: new HttpLink({
            uri: process.env.REACT_APP_API_URL,
            headers: {
                'X-API-KEY': authToken,
            },
        }),
        cache: new InMemoryCache(),
    });
}
