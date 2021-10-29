import { ResultsEntity } from '../types/featuredProducts';

export const filterProductsByCategory = (
    filtersSelected: string[],
    products: ResultsEntity[]
) => {
    console.log('filtersSelected', filtersSelected);
    console.log('products drom filter fn', products);
    if (filtersSelected.length === 0) return products;
    const filteredProducts = products.filter((item) =>
        filtersSelected.includes(item.data.category.slug)
    );

    return filteredProducts;
};
