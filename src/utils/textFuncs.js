export const textCapitalize = (givenText) => {
    const text = givenText.charAt(0).toUpperCase() + givenText.slice(1, givenText.length)
    return text;
}