import { rest } from 'msw';
import { baseUrl } from '../../config/app/constants';
import { featuredBanners as mockedFeaturedBanners } from '../../mocks/featuredBanners';
import { productCategories as mockedProductCategories } from '../../mocks/productCategories';
import { featuredProducts as mockedFeaturedProducts } from '../../mocks/featuredProducts';

const handlers = [
    //featured banners
    rest.get(`${baseUrl}/documents/search`, (req, res, ctx) => {
        const query = req.url.searchParams;
        const allQ = query.getAll('q');

        if (allQ.includes('[[at(document.type, "banner")]]')) {
            return res(ctx.status(200), ctx.json(mockedFeaturedBanners));
        }

        if (
            allQ.includes('[[at(document.type, "product")]]') &&
            allQ.includes('[[at(document.tags, ["Featured"])]]')
        ) {
            return res(ctx.status(200), ctx.json(mockedFeaturedProducts));
        }

        if (allQ.includes('[[at(document.type, "category")]]')) {
            return res(ctx.status(200), ctx.json(mockedProductCategories));
        }
    }),
];

export { handlers };
