import queryString from 'query-string';

export const parseCategoriesParams = (search: string) => {
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

    return parsedCategories;
};
