import { screen } from '@testing-library/react';
import ProductDetail from './';
import { renderWithProviders } from '../../test/test-utils';
import { productById } from '../../mocks/productById';
import { server } from '../../test/server';
import { rest } from 'msw';
import { baseUrl } from '../../config/app/constants';

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

describe('Add product to cart', () => {
    it('A product is added to cart when user clicks on Add to product', async () => {
        const { store } = renderWithProviders(<ProductDetail />);
        let currentStore = store.getState();
        expect(currentStore.cart.products.length).toEqual(0);
        const button = await screen.findByTestId('addToCart-btn');

        button.click();
        currentStore = store.getState();
        expect(currentStore.cart.products.length).toEqual(1);
    });

    it('Button is disabled when stock is equal 0', async () => {
        //intercept common response managed in handler, in order to mutate stock to 0.
        server.use(
            rest.get(`${baseUrl}/documents/search`, (req, res, ctx) => {
                const query = req.url.searchParams;
                const allQ = query.getAll('q');

                if (allQ.includes(`[[:d = at(document.id, "undefined") ]]`)) {
                    productById.results[0].data.stock = 0;
                    return res(ctx.status(200), ctx.json(productById));
                }
            })
        );
        renderWithProviders(<ProductDetail />);
        const button = await screen.findByTestId('addToCart-btn');
        expect(button).toHaveAttribute('disabled');
    });
});
