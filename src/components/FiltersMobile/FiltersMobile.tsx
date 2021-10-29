import { useState } from 'react';
import { ResultsEntity } from '../../types/productCategories';
import { ResultsEntity as ResultsEntityProducts } from '../../types/featuredProducts';
import {
    FiltersMobileContainer,
    FilterIconContainer,
    FiltersWrapper,
    CloseButtonContainer,
} from './styled';
import ActionButton from '../ActionButton';
import SimpleButton from '../SimpleButton';
import Filters from '../Filters';
import Filter from '../Icons/Filter';
import Close from '../Icons/Close';

interface FiltersMobileProps {
    categories: ResultsEntity[];
    baseProducts: ResultsEntityProducts[];
}

const FiltersMobile = ({ categories, baseProducts }: FiltersMobileProps) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };
    return (
        <FiltersMobileContainer>
            <FilterIconContainer>
                <ActionButton
                    label={<Filter />}
                    onClick={() => toggleShow()}
                    padding="0.3em"
                />
            </FilterIconContainer>

            {show && (
                <FiltersWrapper>
                    <CloseButtonContainer>
                        <SimpleButton
                            label={<Close />}
                            onClick={() => toggleShow()}
                        />
                    </CloseButtonContainer>
                    <Filters
                        categories={categories}
                        baseProducts={baseProducts}
                    />
                </FiltersWrapper>
            )}
        </FiltersMobileContainer>
    );
};

export default FiltersMobile;
