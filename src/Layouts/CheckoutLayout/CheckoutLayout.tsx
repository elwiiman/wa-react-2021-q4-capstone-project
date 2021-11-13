import CheckoutHeader from '../../components/CheckoutHeader';
import { ReactNode } from 'react';

export interface MainLayoutProps {
    children: ReactNode;
}

const CheckoutLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <CheckoutHeader />
            {children}
        </>
    );
};

export default CheckoutLayout;
