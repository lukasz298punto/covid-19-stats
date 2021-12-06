import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from 'utils/api';
import './style/root.less';
import Base from 'layout/Base';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from 'pages/NoMatch';
import 'locales/config/i18n';
import { map } from 'lodash';
import { routes } from 'constants/routes';

const client = createApolloClient(process.env.REACT_APP_API_KEY as string);

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Base>
                    <Routes>
                        {map(routes, ({ path, component }) => (
                            <Route key={path} path={path} element={component} />
                        ))}

                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
