import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { ReactNode } from 'react';

export interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <NavBar doSearch={() => {}} />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
