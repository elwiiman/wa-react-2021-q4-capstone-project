import { GlobalStyles } from './config/global.styles';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import ThemeProvider from './context/ThemeProvider';
import MainLayout from './Layouts/MainLayout/MainLayout';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <ThemeProvider>
                <GlobalStyles />
                <MainLayout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/products"
                            component={ProductsList}
                        />
                    </Switch>
                </MainLayout>
            </ThemeProvider>
        </Router>
    );
}

export default App;
