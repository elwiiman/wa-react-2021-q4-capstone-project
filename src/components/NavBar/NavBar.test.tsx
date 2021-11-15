import { screen } from '@testing-library/react';
import NavBar from './NavBar';

import { renderWithProviders } from '../../test/test-utils';

test('Logo renders correctly', () => {
    renderWithProviders(<NavBar doSearch={() => {}} />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
});
