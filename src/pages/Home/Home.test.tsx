import React from 'react';
import { screen } from '@testing-library/react';
import Home from './';
import { renderWithProviders } from '../../test/test-utils';

describe('Fetch and render from the API', () => {
    it('Featured Banners are fetched and renders correctly', async () => {
        renderWithProviders(<Home />);
        const displayedBanners = await screen.findAllByTestId(
            /featured-banner-img-\d+/
        );

        //because mocks have 3 elements as results of featured banners
        expect(displayedBanners).toHaveLength(3);
    });

    it('Featured Products are fetched and renders correctly', async () => {
        renderWithProviders(<Home />);

        const displayedProducts = await screen.findAllByTestId(
            /featured-product-\d+/
        );
        //because mocks have 29 elements as results of featured products
        expect(displayedProducts).toHaveLength(29);
    });

    it('Categories are fetched and render correctly', async () => {
        renderWithProviders(<Home />);

        const displayedCategories = await screen.findAllByTestId(
            /category-\d+/
        );

        //because mocks have 5 elements as results of categories
        expect(displayedCategories).toHaveLength(5);
    });
});
