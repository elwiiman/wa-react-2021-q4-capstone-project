import React, { useState, useEffect } from 'react';
import { CheckboxContainer, FiltersTitle } from './styled';
import { ResultsEntity } from '../../types/productCategories';
import { ResultsEntity as ResultsEntityProducts } from '../../types/featuredProducts';
import CustomCheckbox from '../CustomCheckbox';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import ActionButton from '../ActionButton';
import { parseCategoriesParams } from '../../helpers/queryParamsHelpers';

interface FilterBarProps {
    categories: ResultsEntity[];
    baseProducts: ResultsEntityProducts[];
}

const Filters = ({ categories, baseProducts }: FilterBarProps) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const history = useHistory();
    const { pathname, search } = useLocation();

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
        const query = queryString.stringify(
            { category: selectedFilters },
            { arrayFormat: 'separator', arrayFormatSeparator: '|' }
        );
        history.push(`${pathname}?${query}`);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFilters]);

    useEffect(() => {
        if (search) {
            const parsedCategories = parseCategoriesParams(search);
            setSelectedFilters(parsedCategories);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section>
            <FiltersTitle>Filtrar por:</FiltersTitle>
            {categories.map((category) => (
                <CheckboxContainer key={category.id}>
                    <CustomCheckbox
                        label={category.data.name}
                        name={'filters'}
                        id={category.data.name}
                        checked={selectedFilters.includes(category.slugs[0])}
                        value={category.slugs[0]}
                        onChange={onChange}
                    />
                </CheckboxContainer>
            ))}
            {selectedFilters.length > 0 && (
                <ActionButton
                    label="Clean Filters"
                    onClick={() => setSelectedFilters([])}
                    color="secondary"
                />
            )}
        </section>
    );
};

export default Filters;
