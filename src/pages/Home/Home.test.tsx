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

        const displayedCategories = await screen.findAllByTestId(
            /category-\d+/
        );

        //because mocks have 3 elements as results of featured banners
        expect(displayedBanners).toHaveLength(3);

        //because mocks have 1 elements as results of featured products
        expect(displayedProducts).toHaveLength(1);

        //because mocks have 5 elements as results of categories
        expect(displayedCategories).toHaveLength(5);
    });
});
