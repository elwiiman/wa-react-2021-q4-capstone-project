import { useState } from 'react';
import ProductGallery from '../../components/ProductGallery';
import ActionButton from '../../components/ActionButton';
import QuantityButton from '../../components/QuantityButton';
import ProductInfo from '../../components/ProductInfo';
import ProductTags from '../../components/ProductTags';
import ProductSpecs from '../../components/ProductSpecs';
import Container from '../../components/Common/Container';
import {
    HalfContainer,
    HalfWithLimitContainer,
    OverallContainer,
    ActionButtonContainer,
    QuantityTag,
    TagsContainer,
    Subtitle,
} from './styled';
import { useGetProductByIdQuery } from '../../services/api/apiSlice';
import { useParams } from 'react-router';
import Spinner from '../../components/Spinner';

interface ProductDetailParams {
    id: string;
}

//TODO: its probable to use props
// interface ProductDetailProps {}

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams<ProductDetailParams>();

    const {
        data: productResult,
        isLoading: isLoadingProductResult,
    } = useGetProductByIdQuery(id);

    console.log('productResult', productResult);

    if (isLoadingProductResult && !productResult) return <Spinner />;
    if (productResult)
        return (
            <Container noPaddingTop noPaddingBottom>
                <OverallContainer>
                    <HalfWithLimitContainer>
                        <ProductGallery product={productResult.results[0]} />
                    </HalfWithLimitContainer>

                    <HalfContainer>
                        <ProductInfo product={productResult.results[0]} />
                        <Container colorType="secondary_opac" noPaddingTop>
                            <TagsContainer>
                                <ProductTags
                                    product={productResult.results[0]}
                                />
                            </TagsContainer>

                            <QuantityTag>Cantidad:</QuantityTag>
                            <QuantityButton
                                quantity={quantity}
                                maxQuantity={
                                    productResult.results[0].data.stock
                                }
                                onQuantityChange={setQuantity}
                                onErrorHappen={
                                    //Handle error, maybe with a toast
                                    () => {}
                                }
                            />
                            <ActionButtonContainer>
                                <ActionButton
                                    color="secondary"
                                    label="Add to Cart"
                                    onClick={
                                        // TODO: make add to car functionality
                                        () => {}
                                    }
                                />
                            </ActionButtonContainer>
                        </Container>

                        <Subtitle>Specifications</Subtitle>
                        <Container
                            colorType="secondary_opac"
                            width="fit-content"
                        >
                            <ProductSpecs product={productResult.results[0]} />
                        </Container>
                    </HalfContainer>
                </OverallContainer>
            </Container>
        );
    else return null;
};

export default ProductDetail;
