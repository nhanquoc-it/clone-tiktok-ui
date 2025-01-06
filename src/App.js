import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import Routes
import { publicRoutes } from '~/routes';
// Import Layout
import { DefaultLayout } from '~/components/Layouts';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    // Config Layout
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    const Page = route.component;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
