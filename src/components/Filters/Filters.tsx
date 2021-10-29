import React, { useState, useEffect } from 'react';
import { CheckboxContainer, FiltersTitle } from './styled';
import { ResultsEntity } from '../../types/productCategories';
import { ResultsEntity as ResultsEntityProducts } from '../../types/featuredProducts';
import { filterProductsByCategory } from '../../helpers/filtersHelpers';
import CustomCheckbox from '../CustomCheckbox';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import ActionButton from '../ActionButton';

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
        if (search) {
            const parsed = queryString.parse(search, {
                arrayFormat: 'separator',
                arrayFormatSeparator: '|',
            });

            let parsedCategories: string[] = [];

            if (!Array.isArray(parsed.category) && parsed.category !== null) {
                parsedCategories = [parsed.category];
            } else if (parsed.category === null) {
                parsedCategories = [];
            } else {
                parsedCategories = [...parsed.category];
            }

            setSelectedFilters(parsedCategories);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const query = queryString.stringify(
            { category: selectedFilters },
            { arrayFormat: 'separator', arrayFormatSeparator: '|' }
        );
        history.push(`${pathname}?${query}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFilters]);

    useEffect(() => {
        setParentProducts(
            filterProductsByCategory(selectedFilters, baseProducts)
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
