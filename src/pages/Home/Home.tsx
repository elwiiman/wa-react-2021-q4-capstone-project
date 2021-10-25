import Slider from '../../components/Slider';
import CategoriesGrid from '../../components/CategoriesGrid';
import FeaturedProductsGrid from '../../components/FeaturedProductsGrid';
import Title from '../../components/Title';
import Container from '../../components/Common/Container';
import { featuredBanners } from '../../mocks/featuredBanners';
import { productCategories } from '../../mocks/productCategories';
import { featuredProducts } from '../../mocks/featuredProducts';

const Home = () => {
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
        </>
    );
};

export default Home;
