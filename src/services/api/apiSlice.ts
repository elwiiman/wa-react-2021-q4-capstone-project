// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FeaturedBanners } from '../../types/featuredBanners';
import { ProductCategories } from '../../types/productCategories';
import { FeaturedProducts } from '../../types/featuredProducts';
import { ProductById } from '../../types/productById';
import { apiRef, baseUrl } from '../../config/app/constants';

interface ISearch {
    term: string | string[] | null;
    page: number;
}

// Define a service using a base URL and expected endpoints
export const furnitureApi = createApi({
    reducerPath: 'furnitureApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
    endpoints: (builder) => ({
        getFeaturedBanners: builder.query<FeaturedBanners, void>({
            query: () =>
                `documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22banner%22)%5D%5D&lang=en-us&pageSize=5`,
        }),
        getProductsCategories: builder.query<ProductCategories, void>({
            query: () =>
                `/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30`,
        }),
        getFeaturedProducts: builder.query<FeaturedProducts, void>({
            query: () =>
                `/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16`,
        }),
        getProducts: builder.query<FeaturedProducts, number>({
            query: (page = 1) =>
                `/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&lang=en-us&pageSize=12&page=${page}`,
        }),
        getProductById: builder.query<ProductById, string>({
            query: (id) =>
                `/documents/search?ref=${apiRef}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${id}%22%29+%5D%5D`,
        }),

        searchProducts: builder.query<FeaturedProducts, ISearch>({
            query: (search) =>
                `/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bfulltext(document%2C%20%22${search.term}%22)%5D%5D&lang=en-us&pageSize=20&page=${search.page}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetFeaturedBannersQuery,
    useGetProductsCategoriesQuery,
    useGetFeaturedProductsQuery,
    useGetProductsQuery,
    useGetProductByIdQuery,
    useSearchProductsQuery,
} = furnitureApi;
