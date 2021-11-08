import { ResultsEntity as Product } from '../../types/productById';
import { Pill, PillContainer } from './styled';
interface ProductTagsProps {
    product: Product;
}

const ProductTags = ({ product: { tags } }: ProductTagsProps) => {
    return (
        <PillContainer>
            {tags?.map((tag) => (
                <Pill>{tag}</Pill>
            ))}
        </PillContainer>
    );
};

export default ProductTags;
