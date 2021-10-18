import { ResultsEntity } from '../../types/featuredProducts';
import {
    OveralContainer,
    FeaturedProductImageContainer,
    Price,
    InfoContainer,
    ItemInfoName,
    ItemInfo,
} from './styled';
import { takefirstCharacters } from '../../helpers/stringHelpers';

export interface FeaturedProductProps {
    product: ResultsEntity;
}

const FeaturedProduct = ({ product: { data } }: FeaturedProductProps) => {
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
            <FeaturedProductImageContainer>
                <img src={url} alt={alt} />
            </FeaturedProductImageContainer>
            <InfoContainer>
                <ItemInfoName>{name}</ItemInfoName>
                <ItemInfo>Category : {slug}</ItemInfo>
                <Price>$ {price}</Price>
            </InfoContainer>
        </OveralContainer>
    );
};

export default FeaturedProduct;
