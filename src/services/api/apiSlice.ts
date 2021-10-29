// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FeaturedBanners } from '../../types/featuredBanners';
import { ProductCategories } from '../../types/productCategories';
import { FeaturedProducts } from '../../types/featuredProducts';
import { apiRef, baseUrl } from '../../config/app/constants';

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
                `https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16`,
        }),
        getProducts: builder.query<FeaturedProducts, number>({
            query: (page = 1) =>
                `https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&lang=en-us&pageSize=12&page=${page}`,
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
} = furnitureApi;
