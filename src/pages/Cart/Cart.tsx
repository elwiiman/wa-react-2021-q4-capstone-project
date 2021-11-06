import { useAppSelector } from '../../config/app/hooks';
import { selectTotalAmount } from '../../features/cartSlice';
import Container from '../../components/Common/Container';
import NoResults from '../../components/NoResults';
import ProductInCart from '../../components/ProductInCart';
import Title from '../../components/Title';
import CartTotal from '../../components/CartTotal';
import {
    CartOverallContainer,
    TotalContainer,
    CartWrapper,
    CartElementsContainer,
} from './styled';
interface CartProps {}

const Cart = ({}: CartProps) => {
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
                </TotalContainer>
            </CartElementsContainer>
        </CartWrapper>
    );
};

export default Cart;
