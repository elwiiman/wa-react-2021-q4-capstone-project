import React from 'react';
import { screen } from '@testing-library/react';
import Home from './';
import { renderWithProviders } from '../../test/test-utils';

describe('Fetch and render from the API', () => {
    renderWithProviders(<Home />);
    it('Featured Banners are fetched and renders correctly', async () => {
        const displayedBanners = await screen.findAllByTestId(
            /featured-banner-img-\d+/
        );

        const displayedProducts = await screen.findAllByTestId(
            /featured-product-\d+/
        );

        //because mocks have 3 elements as results of featured banners
        expect(displayedBanners).toHaveLength(3);

        expect(displayedProducts).toHaveLength(1);
    });
});
