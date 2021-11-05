import { Link } from 'react-router-dom';
import { ResultsEntity } from '../../types/featuredProducts';
import { useAppDispatch } from '../../config/app/hooks';
import { addToCart } from '../../features/cartSlice';
import {
    OveralContainer,
    FeaturedProductImageContainer,
    Price,
    InfoContainer,
    ItemInfoName,
    ItemInfo,
    AddToCartButtonContainer,
} from './styled';
import { takefirstCharacters } from '../../helpers/stringHelpers';
import ActionButton from '../ActionButton';

export interface FeaturedProductProps {
    product: ResultsEntity;
}

const FeaturedProduct = (props: FeaturedProductProps) => {
    const { product } = props;
    const { data, id } = props.product;
    const dispatch = useAppDispatch();
    const {
        category: { slug },
        mainimage: { url, alt },
        price,
    } = data;

    let { name } = data;

    if (name.length > 20) {
        name = `${takefirstCharacters(name, 18)}...`;
    }

    return (
        <OveralContainer>
            <Link to={`/product/${id}`}>
                <FeaturedProductImageContainer>
                    <img src={url} alt={alt} />
                </FeaturedProductImageContainer>
            </Link>

            <InfoContainer>
                <Link to={`/product/${id}`}>
                    <ItemInfoName>{name}</ItemInfoName>
                </Link>
                <ItemInfo>Category : {slug}</ItemInfo>
                <Price>$ {price}</Price>
            </InfoContainer>

            <AddToCartButtonContainer>
                <ActionButton
                    color="tertiary"
                    label="Add to Cart"
                    onClick={() => {
                        dispatch(
                            addToCart({
                                ...product,
                                quantity: 1,
                            })
                        );
                    }}
                    disabled={product.data.stock <= 0}
                />
            </AddToCartButtonContainer>
        </OveralContainer>
    );
};

export default FeaturedProduct;
