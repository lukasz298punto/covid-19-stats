import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from 'utils/api';
import './style/root.less';
import Base from 'layout/Base';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const client = createApolloClient(process.env.REACT_APP_API_KEY as string);

function One() {
    return <>one</>;
}

function Two() {
    return <> tw</>;
}

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Base>
                    <Routes>
                        <Route path="/" element={<One />} />
                        <Route path="/teams" element={<Two />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
