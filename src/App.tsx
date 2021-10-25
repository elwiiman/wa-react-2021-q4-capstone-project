import { GlobalStyles } from './config/global.styles';
import Home from './pages/Home';
import ThemeProvider from './context/ThemeProvider';
import MainLayout from './Layouts/MainLayout/MainLayout';

function App() {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <MainLayout>
                <Home />
            </MainLayout>
        </ThemeProvider>
    );
}

export default App;
