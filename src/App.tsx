import { GlobalStyles } from './config/global.styles';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import ThemeProvider from './context/ThemeProvider';
import MainLayout from './Layouts/MainLayout/MainLayout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop/';

function App() {
    return (
        <Router>
            <ThemeProvider>
                <GlobalStyles />
                <MainLayout>
                    <ScrollToTop />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route
                            exact
                            path="/products"
                            component={ProductsList}
                        />
                        <Route path="/product/:id" component={ProductDetail} />
                        <Route path="/search" component={Search} />
                    </Switch>
                </MainLayout>
            </ThemeProvider>
        </Router>
    );
}

export default App;
