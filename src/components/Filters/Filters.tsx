import React, { useState, useEffect } from 'react';
import { CheckboxContainer, FiltersTitle } from './styled';
import { ResultsEntity } from '../../types/productCategories';
import { ResultsEntity as ResultsEntityProducts } from '../../types/featuredProducts';
import { filterProductsByCategory } from '../../helpers/filtersHelpers';
import CustomCheckbox from '../CustomCheckbox';

interface FilterBarProps {
    categories: ResultsEntity[];
    baseProducts: ResultsEntityProducts[];
    setParentProducts: React.Dispatch<
        React.SetStateAction<ResultsEntityProducts[]>
    >;
}

const Filters = ({
    categories,
    baseProducts,
    setParentProducts,
}: FilterBarProps) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;

        //when checked, add slug of category to selectedFilters
        if (checked) {
            setSelectedFilters([...selectedFilters, e.target.value]);

            //when not checked, delete slug of category from an array of strings
        } else {
            const discriminateFilters = selectedFilters.filter(
                (elem) => elem !== e.target.value
            );
            setSelectedFilters([...discriminateFilters]);
        }
    };

    useEffect(() => {
        setParentProducts(
            filterProductsByCategory(selectedFilters, baseProducts)
        );
    }, [selectedFilters]);

    return (
        <section>
            <FiltersTitle>Filtrar por:</FiltersTitle>
            {categories.map((category) => (
                <CheckboxContainer key={category.id}>
                    <CustomCheckbox
                        label={category.data.name}
                        name={'filters'}
                        id={category.data.name}
                        value={category.slugs[0]}
                        onChange={onChange}
                    />
                </CheckboxContainer>
            ))}
        </section>
    );
};

export default Filters;
