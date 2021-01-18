export const multiSelect = (elements) => {
    const elementArr = elements.map(element => {
        return document.querySelector(element);
    })

    return elementArr;
}