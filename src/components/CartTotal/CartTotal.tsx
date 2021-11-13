import { TotalContainer, TotalLabel, TotalQuantity } from './styled';
interface CartTotalProps {
    total: number;
}

const CartTotal = ({ total }: CartTotalProps) => {
    return (
        <TotalContainer>
            <TotalLabel>Total:</TotalLabel>
            <TotalQuantity>$ {Number(total).toFixed(2)}</TotalQuantity>
        </TotalContainer>
    );
};

export default CartTotal;
