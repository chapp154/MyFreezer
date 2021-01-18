export const multiSelect = (elements) => {
    const elementArr = elements.map(element => {
        return document.querySelector(element);
    })

    return elementArr; // const [el1, el2, el3] = multiSelect([".wuff", "#meoww", ".kwak"]);
}
