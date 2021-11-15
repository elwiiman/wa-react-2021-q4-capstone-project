import { rest } from 'msw';
import { baseUrl } from '../../config/app/constants';
import { featuredBanners as mockedFeaturedBanners } from '../../mocks/featuredBanners';
import { productCategories as mockedProductCategories } from '../../mocks/productCategories';
import { featuredProducts as mockedFeaturedProducts } from '../../mocks/featuredProducts';
import {
    productsPage1 as mockedProductsPage1,
    productsPage2 as mockedProductsPage2,
    productsPage3 as mockedProductsPage3,
} from '../../mocks/products';

const handlers = [
    //featured banners
    rest.get(`${baseUrl}/documents/search`, (req, res, ctx) => {
        const query = req.url.searchParams;
        const allQ = query.getAll('q');

        //featured banners
        if (allQ.includes('[[at(document.type, "banner")]]')) {
            return res(ctx.status(200), ctx.json(mockedFeaturedBanners));
        }

        //featured products
        if (
            allQ.includes('[[at(document.type, "product")]]') &&
            allQ.includes('[[at(document.tags, ["Featured"])]]')
        ) {
            return res(ctx.status(200), ctx.json(mockedFeaturedProducts));
        }

        //product categories
        if (allQ.includes('[[at(document.type, "category")]]')) {
            return res(ctx.status(200), ctx.json(mockedProductCategories));
        }

        const page = query.get('page');

        //page 1 for product listing
        if (allQ.includes('[[at(document.type, "product")]]') && page === '1') {
            return res(ctx.status(200), ctx.json(mockedProductsPage1));
        }

        //page 2 or product listing
        if (allQ.includes('[[at(document.type, "product")]]') && page === '2') {
            return res(ctx.status(200), ctx.json(mockedProductsPage2));
        }

        //page 2 or product listing
        if (allQ.includes('[[at(document.type, "product")]]') && page === '3') {
            return res(ctx.status(200), ctx.json(mockedProductsPage3));
        }
    }),
];

export { handlers };
