import { useState } from 'react';
import { useAppDispatch } from '../../config/app/hooks';
import { addToCart } from '../../features/cartSlice';
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
    const dispatch = useAppDispatch();

    const {
        data: productResult,
        isLoading: isLoadingProductResult,
    } = useGetProductByIdQuery(id);

    if (isLoadingProductResult && !productResult)
        return (
            <Container colorType="paper" flexCenter style={{ height: '50vh' }}>
                <Spinner widthAndHeight="45px" />
            </Container>
        );
    if (productResult)
        return (
            <Container
                noPaddingTop
                noPaddingBottom
                data-testid="detail-product-fullContainer"
            >
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
                                    onClick={() => {
                                        dispatch(
                                            addToCart({
                                                ...productResult.results[0],
                                                quantity,
                                            })
                                        );
                                    }}
                                    disabled={
                                        productResult.results[0].data.stock <= 0
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
