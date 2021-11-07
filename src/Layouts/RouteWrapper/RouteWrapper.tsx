import { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router';

export interface RouteWrapperProps extends RouteProps {
    component: ComponentType<any>;
    layout: ComponentType<any>;
}

const RouteWrapper = ({
    component: Component,
    layout: Layout,
    ...rest
}: RouteWrapperProps) => {
    return (
        <Route
            {...rest}
            render={() => (
                <Layout>
                    <Component />
                </Layout>
            )}
        />
    );
};

export default RouteWrapper;
