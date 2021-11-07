import { CartProduct } from '../../types/cart';
import {
    ConfirmedProductContainer,
    ProductImage,
    InfoContainer,
    PriceInfoContainer,
    ProductAndInfoContainer,
    OveralInfoContainer,
    ProductImageContainer,
    Name,
    Price,
    Quantity,
    Subtotal,
} from './styled';

interface ConfirmedProductProps {
    product: CartProduct;
}

const ConfirmedProduct = ({ product }: ConfirmedProductProps) => {
    const { data, quantity } = product;
    const { name, price, images } = data;
    const [
        {
            image: { url, alt },
        },
    ] = images; //destructure first element url.

    return (
        <ConfirmedProductContainer>
            <ProductImageContainer>
                <ProductImage src={url} alt={alt ? alt : 'not-available'} />
            </ProductImageContainer>

            <OveralInfoContainer>
                <ProductAndInfoContainer>
                    <InfoContainer>
                        <Name>{name}</Name>
                        <Price>$ {Number(price).toFixed(2)}</Price>
                    </InfoContainer>
                </ProductAndInfoContainer>

                <PriceInfoContainer>
                    <Quantity>
                        {' '}
                        Qty :{' '}
                        <span>
                            {quantity} {`unit${quantity > 1 ? 's' : ''} `}
                        </span>
                    </Quantity>
                    <Subtotal>
                        Subtotal:
                        <span> $ {Number(quantity * price).toFixed(2)}</span>
                    </Subtotal>
                </PriceInfoContainer>
            </OveralInfoContainer>
        </ConfirmedProductContainer>
    );
};

export default ConfirmedProduct;
