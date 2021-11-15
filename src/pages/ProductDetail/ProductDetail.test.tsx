import { screen } from '@testing-library/react';
import ProductDetail from './';
import { renderWithProviders } from '../../test/test-utils';

describe('Fetch and render from the API', () => {
    it('Product Data is fetched correctly', async () => {
        renderWithProviders(<ProductDetail />);

        const fullContainer = await screen.findByTestId(
            'detail-product-fullContainer'
        );
        expect(fullContainer).toBeInTheDocument();

        const name = await screen.findByTestId('detail-product-name');
        expect(name).toHaveTextContent('Grayton Armchair');
    });
});

describe('Renders labels correctly', () => {
    it('Product Data is fetched correctly', async () => {
        renderWithProviders(<ProductDetail />);

        const name = await screen.findByTestId('detail-product-name');
        expect(name).toHaveTextContent('Grayton Armchair');

        const price = await screen.findByTestId('detail-product-price');
        expect(price).toHaveTextContent('1689.74');

        const shortDescription = await screen.findByTestId(
            'detail-product-shortDescription'
        );
        expect(shortDescription).toHaveTextContent(
            'Inclined arm. The cushions are not removable. The kiln-dried, corner-locked rubber wood frame provides exceptional structural integrity.'
        );

        const category = await screen.findByTestId('detail-product-category');
        expect(category).toHaveTextContent('furniture');

        const sku = await screen.findByTestId('detail-product-sku');
        expect(sku).toHaveTextContent('1105659063');
    });
});

describe('Add to cart button and Quantity button are rendered', () => {
    it('Add to cart is rendered', async () => {
        renderWithProviders(<ProductDetail />);
        const button = await screen.findByTestId('addToCart-btn');
        expect(button).toBeInTheDocument();

        const qtyButton = await screen.findByTestId('quantity-btn');
        expect(qtyButton).toBeInTheDocument();
    });
});
