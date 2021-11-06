import { useState } from 'react';
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
    addToCart: (product: CartProduct) => void;
    removeFromCart: (product: CartProduct) => void;
}

const Label = () => {
    return (
        <DeleteContainer>
            <Trash widthAndHeight={13} />
            Eliminar
        </DeleteContainer>
    );
};

const ProductInCart = ({
    product,
    addToCart,
    removeFromCart,
}: ProductInCartProps) => {
    const { data, quantity } = product;
    const [localQuantity, setLocalQuantity] = useState(quantity);
    const { name, price, images } = data;
    const [
        {
            image: { url, alt },
        },
    ] = images; //destructure first element url.

    return (
        <Container maxWidth="600px">
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
                            onClick={() => removeFromCart(product)}
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
                            addToCart({ ...product, quantity: quantity });
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
