import queryString from 'query-string';

export const parseCategoriesParams = (search: string) => {
    const parsed = queryString.parse(search, {
        arrayFormat: 'separator',
        arrayFormatSeparator: '|',
    });

    let parsedCategories: string[] = [];

    if (parsed.category === null || parsed.category === undefined) {
        parsedCategories = [];
    } else if (!Array.isArray(parsed.category) && parsed.category !== null) {
        parsedCategories = [parsed.category];
    } else {
        parsedCategories = [...parsed.category];
    }

    return parsedCategories;
};

export const getCategoriesParams = (search: string) => {
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

    const query = queryString.stringify(
        { category: parsedCategories },
        { arrayFormat: 'separator', arrayFormatSeparator: '|' }
    );

    return query ? `${query}&` : '';
};
