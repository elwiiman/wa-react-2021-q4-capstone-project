import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

import ThemeProvider from '../../context/ThemeProvider';

test('Logo renders correctly', () => {
    render(
        <ThemeProvider>
            <NavBar doSearch={() => {}} />
        </ThemeProvider>
    );
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
});
