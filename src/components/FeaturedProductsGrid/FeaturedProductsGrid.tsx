import { ResultsEntity } from '../../types/featuredProducts';
import FeaturedProduct from '../FeaturedProduct';
import { Link } from 'react-router-dom';
import ActionButton from '../ActionButton';
import {
    OverallGridContainer,
    GridContainer,
    GridItem,
    ButtonContainer,
} from './styled';

interface FeaturedProductsProps {
    products: ResultsEntity[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
    return (
        <>
            <OverallGridContainer>
                <GridContainer>
                    {products.map((product, index) => (
                        <GridItem key={index}>
                            <FeaturedProduct product={product} />
                        </GridItem>
                    ))}
                </GridContainer>
            </OverallGridContainer>
            {/* <ButtonContainer>
                <Link to="/products" style={{ width: '100%' }}>
                    <ActionButton
                        color={'tertiary'}
                        label={'View all products'}
                        onClick={() => false}
                    />
                </Link>
            </ButtonContainer> */}
        </>
    );
};

export default FeaturedProducts;
