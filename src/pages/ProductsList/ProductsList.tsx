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
import { productCategories } from '../../mocks/productCategories';
import { featuredProducts } from '../../mocks/featuredProducts';

interface ProductsListProps {}

const ProductsList = () => {
    const [products, setProducts] = useState(featuredProducts.results);
    return (
        <Container colorType="paper">
            <ProductListContainer>
                <MobileFiltersContainer>
                    <FiltersMobile
                        categories={productCategories.results}
                        baseProducts={featuredProducts.results}
                        setParentProducts={setProducts}
                    />
                </MobileFiltersContainer>

                <DesktopFiltersContainer>
                    <Filters
                        categories={productCategories.results}
                        baseProducts={featuredProducts.results}
                        setParentProducts={setProducts}
                    />
                </DesktopFiltersContainer>
                <GridContainer>
                    <FeaturedProductsGrid products={products} />
                </GridContainer>
            </ProductListContainer>
        </Container>
    );
};

export default ProductsList;
