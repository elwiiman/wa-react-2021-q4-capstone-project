import { screen } from '@testing-library/react';
import ProductList from './';
import { renderWithProviders } from '../../test/test-utils';
import '@testing-library/jest-dom';

describe('Fetch and render from the API', () => {
    it('Featured Banners are fetched and renders correctly', async () => {
        renderWithProviders(<ProductList />);
        const categories = await screen.findAllByTestId(/filter-category-\d+/);

        //because mocks have 3 elements as results of featured banners
        expect(categories).toHaveLength(5);
    });
});

//Beacuse of the mocked data in /src/mocks/products.ts, only 3 pages are expected
describe('Paginator works as expected', () => {
    it('Renders possbile pages correctly', async () => {
        renderWithProviders(<ProductList />);
        const pages = await screen.findAllByTestId(/page-\d+/);

        const pagesContent = pages.map((page) => page.textContent);

        expect(pagesContent).toEqual(['1', '2', '3']);
    });

    it('Left arrow is disabled when we are on page 1 and Right arrow is enabled', async () => {
        renderWithProviders(<ProductList />);

        const leftArrow = await screen.findByTestId('left-arrow');
        const rightArrow = await screen.findByTestId('right-arrow');

        expect(leftArrow).toHaveAttribute('disabled');
        expect(rightArrow).not.toHaveAttribute('disabled');
    });

    it('Right arrow is disabled when we are on page 3 and Left arrow is enabled', async () => {
        renderWithProviders(<ProductList />);

        const leftArrow = await screen.findByTestId('left-arrow');
        const rightArrow = await screen.findByTestId('right-arrow');

        const page3Control = await screen.findByTestId('page-2');
        //navigating to page 3
        page3Control.click();

        expect(leftArrow).not.toHaveAttribute('disabled');
        expect(rightArrow).toHaveAttribute('disabled');
    });
});
