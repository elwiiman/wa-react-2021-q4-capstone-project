import { StyledDot, StyledLink, StyledCartIcon } from './styled';
export interface CartStatusProps {
    totalCount: number;
}

const CartStatus = ({ totalCount = 0 }: CartStatusProps) => {
    return (
        <StyledLink to="/cart">
            <StyledCartIcon />
            <StyledDot>{totalCount}</StyledDot>
        </StyledLink>
    );
};

export default CartStatus;
