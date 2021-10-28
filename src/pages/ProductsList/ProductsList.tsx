import { useState } from 'react';
import Container from '../../components/Common/Container';
import Spinner from '../../components/Spinner';
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

const SpinnerWithWrappper = () => {
    return (
        <Container
            flexCenter
            colorType="paper"
            style={{ height: '260px', width: '100px' }}
        >
            <Spinner widthAndHeight="25px" />
        </Container>
    );
};

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
                    {productCategoriesIsLoading && <SpinnerWithWrappper />}
                </MobileFiltersContainer>

                <DesktopFiltersContainer>
                    {productCategories && (
                        <Filters
                            categories={productCategories.results}
                            baseProducts={featuredProducts.results}
                            setParentProducts={setProducts}
                        />
                    )}
                    {productCategoriesIsLoading && <SpinnerWithWrappper />}
                </DesktopFiltersContainer>
                <GridContainer>
                    <FeaturedProductsGrid products={products} />
                </GridContainer>
            </ProductListContainer>
        </Container>
    );
};

export default ProductsList;
