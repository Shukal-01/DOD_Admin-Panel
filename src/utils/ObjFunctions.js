

export const getThisKeyFromThatKeyFromArray = (
    thisKey,
    thisKeyValue,
    thatKey,
    objArr,
) => {
    const thisObject = objArr.filter(value => value[thisKey] === thisKeyValue);
    if (thisObject.length > 0) {
        return thisObject[0][thatKey];
    } else {
        return '';
    }
};
