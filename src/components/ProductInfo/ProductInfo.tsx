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

    const { data: categories } = useGetProductsCategoriesQuery();

    const findCategoryName = (categoryId: Product['id']) => {
        if (!categories) return '';
        return categories.results.find((category) => {
            return category.id === categoryId;
        })?.data.name;
    };

    return (
        <Container colorType="secondary_opac" noPaddingBottom>
            <Name>{name}</Name>
            <Price>{`$ ${price.toFixed(2)}`}</Price>
            <ShortDescription>{short_description}</ShortDescription>
            <ExtraDetails>
                <CategoryInfo>
                    <span>Category:</span> {findCategoryName(category.id)}
                </CategoryInfo>
                <Sku>
                    SKU: <span>{sku}</span>
                </Sku>
            </ExtraDetails>
        </Container>
    );
};

export default ProductInfo;
