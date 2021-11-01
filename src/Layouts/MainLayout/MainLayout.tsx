import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { ReactNode } from 'react';
import { useHistory } from 'react-router';

export interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const history = useHistory();

    const redirectToSearchPage = (term: string) => {
        history.push(`/search?q=${term}`);
    };
    return (
        <>
            <NavBar doSearch={redirectToSearchPage} />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
