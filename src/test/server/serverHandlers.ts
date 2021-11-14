import { rest } from 'msw';
import { apiRef, baseUrl } from '../../config/app/constants';
import { featuredBanners as mockedFeaturedBanners } from '../../mocks/featuredBanners';
import { productCategories as mockedProductCategories } from '../../mocks/productCategories';
import { featuredProducts as mockedFeaturedProducts } from '../../mocks/featuredProducts';

const handlers = [
    //featured banners
    rest.get(
        `${baseUrl}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22banner%22)%5D%5D&lang=en-us&pageSize=5`,
        (req, res, ctx) => {
            return res(ctx.json(mockedFeaturedBanners));
        }
    ),

    //product categories
    rest.get(
        `${baseUrl}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30`,
        (req, res, ctx) => {
            return res(ctx.json(mockedProductCategories));
        }
    ),

    //featured products
    rest.get(
        `${baseUrl}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16`,
        (req, res, ctx) => {
            return res(ctx.json(mockedFeaturedProducts));
        }
    ),
];

export { handlers };
