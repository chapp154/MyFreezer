export class Message {
    constructor(text, type) {
        this.text = text;
        this.type = type;
        this.messageBox = document.getElementById("msgs");
        this.attach();
    }

    attach() {
        const para = document.createElement("p");
        para.textContent = this.text;
        this.messageBox.insertAdjacentElement("afterbegin", para);

        this.para = para;

        console.log(this.para);
    }

    remove() {

    }
}