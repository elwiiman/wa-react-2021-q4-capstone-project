import { useAppSelector } from '../../config/app/hooks';
import { selectTotalAmount } from '../../features/cartSlice';
import NoResults from '../../components/NoResults';
import ProductInCart from '../../components/ProductInCart';
import Title from '../../components/Title';
import CartTotal from '../../components/CartTotal';
import ActionButton from '../../components/ActionButton';
import { Link } from 'react-router-dom';
import {
    CartOverallContainer,
    TotalContainer,
    CartWrapper,
    CartElementsContainer,
    ToCheckoutContainer,
} from './styled';

const Cart = () => {
    const products = useAppSelector((state) => state.cart.products);
    const grandTotal = useAppSelector(selectTotalAmount);

    if (products.length <= 0) return <NoResults reason="noProductsInCart" />;

    return (
        <CartWrapper>
            <Title text="Cart" />
            <CartElementsContainer>
                <CartOverallContainer>
                    {products.map((product, index) => (
                        <div key={index}>
                            <ProductInCart product={product} />
                        </div>
                    ))}
                </CartOverallContainer>

                <TotalContainer>
                    <CartTotal total={grandTotal} />
                    <ToCheckoutContainer>
                        <Link to="/checkout">
                            <ActionButton
                                color={'tertiary'}
                                label={'Proceed to checkout'}
                                onClick={() => false}
                            />
                        </Link>
                    </ToCheckoutContainer>
                </TotalContainer>
            </CartElementsContainer>
        </CartWrapper>
    );
};

export default Cart;
