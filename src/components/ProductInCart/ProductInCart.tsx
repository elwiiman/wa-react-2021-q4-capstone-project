import { useState } from 'react';
import { useAppDispatch } from '../../config/app/hooks';
import { addToCart, deleteFromCart } from '../../features/cartSlice';
import { CartProduct } from '../../types/cart';
import Container from '../Common/Container';
import SimpleButton from '../SimpleButton';
import QuantityButton from '../QuantityButton';
import Trash from '../Icons/Trash';
import {
    Image,
    OverallContainer,
    ImageAndInfoWrapper,
    PriceAndNameContainer,
    Name,
    Price,
    LeftContainer,
    RightContainer,
    SubTotalContainer,
    SubTotallabel,
    DeleteContainer,
} from './styled';
export interface ProductInCartProps {
    product: CartProduct;
}

const Label = () => {
    return (
        <DeleteContainer>
            <Trash widthAndHeight={13} />
            Eliminar
        </DeleteContainer>
    );
};

const ProductInCart = ({ product }: ProductInCartProps) => {
    const { data, quantity } = product;
    const [localQuantity, setLocalQuantity] = useState(quantity);
    const { name, price, images } = data;
    const [
        {
            image: { url, alt },
        },
    ] = images; //destructure first element url.
    const dispatch = useAppDispatch();

    return (
        <Container borderRadius="2px">
            <OverallContainer>
                <ImageAndInfoWrapper>
                    <div>
                        <Image src={url} alt={alt ? alt : 'not-available'} />
                    </div>

                    <RightContainer>
                        <PriceAndNameContainer>
                            <Name>{name}</Name>
                            <Price>{`$ ${price.toFixed(2)}`}</Price>
                        </PriceAndNameContainer>

                        <SimpleButton
                            label={<Label />}
                            onClick={() => dispatch(deleteFromCart(product))}
                        />
                    </RightContainer>
                </ImageAndInfoWrapper>

                <LeftContainer>
                    <QuantityButton
                        quantity={localQuantity}
                        maxQuantity={data.stock}
                        onErrorHappen={() => {}}
                        onQuantityChange={(quantity) => {
                            setLocalQuantity(quantity);
                            dispatch(
                                addToCart({ ...product, quantity: quantity })
                            );
                        }}
                    />
                    <SubTotalContainer>
                        <SubTotallabel>Subtotal :</SubTotallabel>
                        <div>$ {Number(price * localQuantity).toFixed(2)} </div>
                    </SubTotalContainer>
                </LeftContainer>
            </OverallContainer>
        </Container>
    );
};

export default ProductInCart;
