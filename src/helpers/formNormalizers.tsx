export const normalizeZipCode = (value: string) => {
    const onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
};

export const deleteEmojis = (string: string) => {
    return string.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ''
    );
};
