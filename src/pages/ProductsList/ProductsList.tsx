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
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { filterProductsByCategory } from '../../helpers/filtersHelpers';
import { parseCategoriesParams } from '../../helpers/queryParamsHelpers';

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
    const { search } = useLocation();

    const {
        data: productCategories,
        isLoading: productCategoriesIsLoading,
    } = useGetProductsCategoriesQuery();

    const {
        data: productsList,
        isLoading: productListIsLoading,
    } = useGetProductsQuery(page);

    const [products, setProducts] = useState(
        productsList ? productsList.results : []
    );

    useEffect(() => {
        if (productsList) {
            setProducts(productsList.results);
        }
    }, [productsList]);

    useEffect(() => {
        let parsedCategories: string[] = [];
        if (search) {
            parsedCategories = parseCategoriesParams(search);
        } else {
            parsedCategories = [];
        }
        if (productsList) {
            const filteredProducts = filterProductsByCategory(
                parsedCategories,
                productsList.results
            );
            setProducts(filteredProducts);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productsList, search]);

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
