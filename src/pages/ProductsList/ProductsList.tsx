import { useState, useEffect } from 'react';
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
import {
    useGetProductsCategoriesQuery,
    useGetProductsQuery,
} from '../../services/api/apiSlice';

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
    const [page, setPage] = useState(1);

    const {
        data: productCategories,
        isLoading: productCategoriesIsLoading,
    } = useGetProductsCategoriesQuery();

    const {
        data: productsList,
        isLoading: productListIsLoading,
    } = useGetProductsQuery(page);

    const [products, setProducts] = useState(
        productsList?.results ? productsList.results : []
    );

    useEffect(() => {
        if (productsList) {
            setProducts(productsList.results);
        }
    }, [productsList]);

    return (
        <Container colorType="paper">
            <ProductListContainer>
                <MobileFiltersContainer>
                    {productCategories && (
                        <FiltersMobile
                            categories={productCategories.results}
                            baseProducts={
                                productsList?.results
                                    ? productsList.results
                                    : []
                            }
                            setParentProducts={setProducts}
                        />
                    )}
                </MobileFiltersContainer>

                <DesktopFiltersContainer>
                    {productCategories && (
                        <Filters
                            categories={productCategories.results}
                            baseProducts={
                                productsList?.results
                                    ? productsList.results
                                    : []
                            }
                            setParentProducts={setProducts}
                        />
                    )}
                    {productCategoriesIsLoading && <SpinnerWithWrappper />}
                </DesktopFiltersContainer>
                <GridContainer
                    style={productListIsLoading ? { height: '100vh' } : {}}
                >
                    {!productListIsLoading && (
                        <FeaturedProductsGrid products={products} />
                    )}

                    {productListIsLoading && (
                        <Container
                            flexCenter
                            colorType="paper"
                            style={{ height: '50vh' }}
                        >
                            <Spinner widthAndHeight="45px" />
                        </Container>
                    )}
                </GridContainer>
            </ProductListContainer>
        </Container>
    );
};

export default ProductsList;
