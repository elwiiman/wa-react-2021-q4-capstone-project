import { Link } from 'react-router-dom';
import ActionButton from '../../components/ActionButton';
import Slider from '../../components/Slider';
import CategoriesGrid from '../../components/CategoriesGrid';
import FeaturedProductsGrid from '../../components/FeaturedProductsGrid';
import Title from '../../components/Title';
import Container from '../../components/Common/Container';
import { featuredProducts } from '../../mocks/featuredProducts';
import { ViewAllButtonContainer } from './styled';
import {
    useGetFeaturedBannersQuery,
    useGetProductsCategoriesQuery,
} from '../../services/api/apiSlice';

const Home = () => {
    const {
        data: featuredBanners,
        error,
        isLoading,
    } = useGetFeaturedBannersQuery();

    const {
        data: productCategories,
        error: productCategoriesError,
        isLoading: productCategoriesIsLoading,
    } = useGetProductsCategoriesQuery();

    console.log('productCategories', productCategories);

    if (isLoading) return <div style={{ height: '436px' }}>Loading..</div>;
    if (error) return <div>Error!</div>;
    if (featuredBanners && productCategories) {
        return (
            <>
                {/* TODO: subsititue by results from the API */}
                <Slider slides={featuredBanners.results} />

                <Container colorType="paper">
                    <Title text="Product Categories" />
                    <CategoriesGrid categories={productCategories.results} />
                </Container>

                <Container colorType="paper">
                    <Title text="Exclusive products for you" center={true} />
                    <FeaturedProductsGrid products={featuredProducts.results} />
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
    } else return null;
};

export default Home;
