import { ResultsEntity as Product } from '../../types/productById';
import { StyledTable, StyledTh, StyledTr, StyledTd } from './styled';
interface ProductSpecsProps {
    product: Product;
}

const ProductSpecs = ({ product: { data } }: ProductSpecsProps) => {
    const { specs = [] } = data;

    return (
        <StyledTable>
            <tbody>
                {specs?.map((spec, index) => (
                    <StyledTr key={index}>
                        <StyledTh
                            style={index === 0 ? { borderTop: 'none' } : {}}
                        >
                            {spec.spec_name}
                        </StyledTh>
                        <StyledTd
                            style={index === 0 ? { borderTop: 'none' } : {}}
                        >
                            {spec.spec_value}
                        </StyledTd>
                    </StyledTr>
                ))}
            </tbody>
        </StyledTable>
    );
};

export default ProductSpecs;
