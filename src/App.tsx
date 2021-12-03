import React from 'react';
import 'App.css';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from 'utility/api';

const client = createApolloClient(process.env.REACT_APP_API_KEY as string);

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">3234</div>
        </ApolloProvider>
    );
}

export default App;
