import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from 'utils/api';
import './style/root.less';
import Base from 'layout/Base';

const client = createApolloClient(process.env.REACT_APP_API_KEY as string);

function App() {
    return (
        <ApolloProvider client={client}>
            <Base />
        </ApolloProvider>
    );
}

export default App;
