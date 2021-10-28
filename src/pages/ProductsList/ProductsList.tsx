import { useState } from 'react';
import Container from '../../components/Common/Container';
import {
    ProductListContainer,
    DesktopFiltersContainer,
    MobileFiltersContainer,
    GridContainer,
} from './styled';
import Filters from '../../components/Filters';
import FiltersMobile from '../../components/FiltersMobile';
import FeaturedProductsGrid from '../../components/FeaturedProductsGrid';
import { useGetProductsCategoriesQuery } from '../../services/api/apiSlice';
import { featuredProducts } from '../../mocks/featuredProducts';

//TODO: Maybe some props are needed in the future
// interface ProductsListProps {}

const ProductsList = () => {
    const [products, setProducts] = useState(featuredProducts.results);

    const {
        data: productCategories,
        isLoading: productCategoriesIsLoading,
    } = useGetProductsCategoriesQuery();

    return (
        <Container colorType="paper">
            <ProductListContainer>
                <MobileFiltersContainer>
                    {productCategories && (
                        <FiltersMobile
                            categories={productCategories.results}
                            baseProducts={featuredProducts.results}
                            setParentProducts={setProducts}
                        />
                    )}
                </MobileFiltersContainer>

                <DesktopFiltersContainer>
                    {productCategories && (
                        <Filters
                            categories={productCategories.results}
                            baseProducts={featuredProducts.results}
                            setParentProducts={setProducts}
                        />
                    )}
                </DesktopFiltersContainer>
                <GridContainer>
                    <FeaturedProductsGrid products={products} />
                </GridContainer>
            </ProductListContainer>
        </Container>
    );
};

export default ProductsList;
