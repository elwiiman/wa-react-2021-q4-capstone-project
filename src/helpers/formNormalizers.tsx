export const normalizeZipCode = (value: string) => {
    const onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
};
