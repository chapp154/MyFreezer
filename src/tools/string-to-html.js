//Check if method is supported
const supported = (() => {
    if (!window.DOMParser) return false;

    const parser = new DOMParser();
    try {
        parser.parseFromString("x", "text/html");
    } catch (error) {
        return false;
    }
    return true;
})();


export const stringToHtml = (string) => {

    // If DOMParser is supported
    if (supported) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(string, "text/html");
        return doc;
    }

    // Else use the innerHTML
    const dom = document.createElement("div");
    dom.innerHTML = string;
    return dom;

}