import { Link } from 'react-router-dom';
import { ResultsEntity } from '../../types/featuredProducts';
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

const FeaturedProduct = ({ product: { data, id } }: FeaturedProductProps) => {
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
                    onClick={
                        //TODO: implemente add to car function
                        () => {}
                    }
                />
            </AddToCartButtonContainer>
        </OveralContainer>
    );
};

export default FeaturedProduct;
