import { GlobalStyles } from './config/global.styles';
import RouteWrapper from './Layouts/RouteWrapper';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import Cart from './pages/Cart';
import ThemeProvider from './context/ThemeProvider';
import MainLayout from './Layouts/MainLayout/MainLayout';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop/';

function App() {
    return (
        <Router>
            <ThemeProvider>
                <GlobalStyles />

                <ScrollToTop />
                <Switch>
                    <RouteWrapper
                        exact={true}
                        path="/"
                        component={Home}
                        layout={MainLayout}
                    />
                    <RouteWrapper
                        exact
                        path="/home"
                        component={Home}
                        layout={MainLayout}
                    />
                    <RouteWrapper
                        exact
                        path="/products"
                        component={ProductsList}
                        layout={MainLayout}
                    />
                    <RouteWrapper
                        path="/product/:id"
                        component={ProductDetail}
                        layout={MainLayout}
                    />
                    <RouteWrapper
                        path="/search"
                        component={Search}
                        layout={MainLayout}
                    />
                    <RouteWrapper
                        exact
                        path="/cart"
                        component={Cart}
                        layout={MainLayout}
                    />
                </Switch>
            </ThemeProvider>
        </Router>
    );
}

export default App;
