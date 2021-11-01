import { ResultsEntity } from '../types/featuredProducts';

export const filterProductsByCategory = (
    filtersSelected: string[],
    products: ResultsEntity[]
) => {
    if (filtersSelected.length === 0) return products;
    const filteredProducts = products.filter((item) =>
        filtersSelected.includes(item.data.category.slug)
    );

    return filteredProducts;
};
