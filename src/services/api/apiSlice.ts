// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FeaturedBanners } from '../../types/featuredBanners';
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
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFeaturedBannersQuery } = furnitureApi;
