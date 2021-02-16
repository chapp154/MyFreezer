export const customClickEvent = (element) => {
    const clickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
    })

    const domEl = document.querySelector(element);
    domEl.dispatchEvent(clickEvent);
}