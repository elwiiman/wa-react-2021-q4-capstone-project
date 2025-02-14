import { ProductById as ProductByIdResponse } from '../types/productById';

export const productById: ProductByIdResponse = {
    page: 1,
    results_per_page: 20,
    results_size: 1,
    total_results_size: 1,
    total_pages: 1,
    next_page: null,
    prev_page: null,
    results: [
        {
            id: 'YWMHuxIAAC8Azxdw',
            uid: null,
            url: null,
            type: 'product',
            href:
                'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YXc6vhIAACsAyYIc&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWMHuxIAAC8Azxdw%22%29+%5D%5D',
            tags: ['Living Room', 'Armchair', 'Featured'],
            first_publication_date: '2021-10-10T15:33:18+0000',
            last_publication_date: '2021-10-25T22:58:21+0000',
            slugs: ['grayton-armchair', 'sillon-grayton'],
            linked_documents: [],
            lang: 'en-us',
            alternate_languages: [
                { id: 'YWMHGxIAAC4AzxSn', type: 'product', lang: 'es-mx' },
            ],
            data: {
                name: 'Grayton Armchair',
                sku: '1105659063',
                category: {
                    id: 'YWHviRIAACsAyjP3',
                    type: 'category',
                    tags: [],
                    slug: 'furniture',
                    lang: 'en-us',
                    first_publication_date: '2021-10-09T23:34:39+0000',
                    last_publication_date: '2021-10-12T23:30:58+0000',
                    link_type: 'Document',
                    isBroken: false,
                },
                mainimage: {
                    dimensions: { width: 696, height: 900 },
                    alt: 'Grayton Armchair',
                    copyright: null,
                    url:
                        'https://images.prismic.io/wizeline-academy/2a136772-dcee-4eba-9da4-ad3468504bdb_1.webp?auto=compress,format',
                },
                short_description:
                    'Inclined arm. The cushions are not removable. The kiln-dried, corner-locked rubber wood frame provides exceptional structural integrity.',
                description: [
                    {
                        type: 'paragraph',
                        text:
                            'Inclined arm. The cushions are not removable. The kiln-dried, corner-locked rubber wood frame provides exceptional structural integrity. Kiln-dried wood helps prevent warping, splitting, cracking, and the development of mold. Premium quality, aniline dyed. The skin will soften and clear with use and the passage of time, developing an elegant patina. Leather is a natural product. Variations in color and texture are inherent to each skin; no two pieces are exactly alike. The cushion is supported by steel springs that do not sag. Fixed legs have a natural distressed finish. Polyester wrapped cushions for a firmer feel.',
                        spans: [],
                    },
                ],
                specs: [
                    { spec_name: 'Style', spec_value: 'Contemporary' },
                    { spec_name: 'Leg shape', spec_value: 'Conical' },
                    { spec_name: 'Color', spec_value: 'Brown' },
                    { spec_name: 'Collection', spec_value: 'Grayton' },
                    { spec_name: 'Product width', spec_value: '77.47 cm' },
                    { spec_name: 'Product height', spec_value: '77.47 cm' },
                    { spec_name: 'Product depth', spec_value: '71.12 cm' },
                    {
                        spec_name: 'Care and cleaning instructions',
                        spec_value: 'Never use detergents',
                    },
                    { spec_name: 'Material', spec_value: 'Leather' },
                    { spec_name: 'Structure Material', spec_value: 'Wood' },
                ],
                images: [
                    {
                        image: {
                            dimensions: { width: 696, height: 900 },
                            alt: null,
                            copyright: null,
                            url:
                                'https://images.prismic.io/wizeline-academy/2a136772-dcee-4eba-9da4-ad3468504bdb_1.webp?auto=compress,format',
                        },
                    },
                    {
                        image: {
                            dimensions: { width: 696, height: 900 },
                            alt: null,
                            copyright: null,
                            url:
                                'https://images.prismic.io/wizeline-academy/577b9bc0-122a-44bb-b8a4-dd75d8689566_2.webp?auto=compress,format',
                        },
                    },
                ],
                stock: 8,
                price: 1689.74,
            },
        },
    ],
    version: '31acd9d',
    license:
        'This work is licensed under the Creative Commons Attribution 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.',
};
