import { Link } from 'react-router-dom';
import ActionButton from '../../components/ActionButton';
import Slider from '../../components/Slider';
import CategoriesGrid from '../../components/CategoriesGrid';
import FeaturedProductsGrid from '../../components/FeaturedProductsGrid';
import Title from '../../components/Title';
import Container from '../../components/Common/Container';
import { ViewAllButtonContainer } from './styled';
import {
    useGetFeaturedBannersQuery,
    useGetProductsCategoriesQuery,
    useGetFeaturedProductsQuery,
} from '../../services/api/apiSlice';
import Spinner from '../../components/Spinner';

const Home = () => {
    const {
        data: featuredBanners,
        isLoading: featuredBannersIsLoading,
    } = useGetFeaturedBannersQuery();

    const {
        data: productCategories,
        isLoading: productCategoriesIsLoading,
    } = useGetProductsCategoriesQuery();

    const {
        data: featuredProducts,
        isLoading: featuredProductsIsLoading,
    } = useGetFeaturedProductsQuery();

    return (
        <>
            {featuredBanners && <Slider slides={featuredBanners.results} />}

            {featuredBannersIsLoading && (
                <Container flexCenter style={{ height: '400px' }}>
                    <Spinner widthAndHeight={'60px'} />
                </Container>
            )}

            <Container colorType="paper">
                <Title text="Product Categories" />
                {productCategoriesIsLoading && <Spinner />}
                {productCategories && (
                    <CategoriesGrid categories={productCategories.results} />
                )}
            </Container>

            <Container colorType="paper">
                <Title text="Exclusive products for you" center={true} />
                {featuredProducts && (
                    <FeaturedProductsGrid products={featuredProducts.results} />
                )}
                {featuredProductsIsLoading && <Spinner />}
            </Container>

            <Container colorType="paper">
                <ViewAllButtonContainer>
                    <Link to="/products" style={{ width: '100%' }}>
                        <ActionButton
                            color={'tertiary'}
                            label={'View all products'}
                            onClick={() => false}
                        />
                    </Link>
                </ViewAllButtonContainer>
            </Container>
        </>
    );
};

export default Home;
