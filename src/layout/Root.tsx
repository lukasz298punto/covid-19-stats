import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from 'utils/api';
import './style/root.less';
import { Result } from 'antd';

const client = createApolloClient(process.env.REACT_APP_API_KEY as string);

function App() {
    return (
        <ApolloProvider client={client}>
            <Result status="500" title="500" subTitle="Sorry page under construction." />
        </ApolloProvider>
    );
}

export default App;
