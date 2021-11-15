import { ResultsEntity as Product } from '../../types/productById';
import { useGetProductsCategoriesQuery } from '../../services/api/apiSlice';
import Container from '../Common/Container';
import {
    Name,
    Price,
    ShortDescription,
    Sku,
    CategoryInfo,
    ExtraDetails,
} from './styled';
interface ProductInfoProps {
    product: Product;
}

const ProductInfo = ({ product: { data } }: ProductInfoProps) => {
    const { name, price, short_description, sku, category } = data;

    return (
        <Container colorType="secondary_opac" noPaddingBottom>
            <Name data-testid="detail-product-name">{name}</Name>
            <Price data-testid="detail-product-price">{`$ ${price.toFixed(
                2
            )}`}</Price>
            <ShortDescription data-testid="detail-product-shortDescription">
                {short_description}
            </ShortDescription>
            <ExtraDetails>
                <CategoryInfo>
                    <span>Category:</span>{' '}
                    <span data-testid="detail-product-category">
                        {category.slug}
                    </span>
                </CategoryInfo>
                <Sku>
                    SKU: <span data-testid="detail-product-sku">{sku}</span>
                </Sku>
            </ExtraDetails>
        </Container>
    );
};

export default ProductInfo;
