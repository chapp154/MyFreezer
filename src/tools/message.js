export class Message {
    constructor(text, type, colors = {info: "#2F6690", warning: "#BDB100", success: "#00971F"}) {
        this.text = text;
        this.type = type;
        this.messageBox = document.getElementById("msgs");
        this.para = "";
        this.colors = {
            info: colors.info,
            warning: colors.warning,
            success: colors.success,
        }
        this.attach();
        this.remove();
    }

    attach() {
        const para = document.createElement("p");
        para.textContent = this.text;

        switch (this.type) {
            case "info":
                para.style.background = this.colors.info;
                break;
            case "warning":
                para.style.background = this.colors.warning;
                break;
            case "success":
                para.style.background = this.colors.success;
                break;
        }

        this.messageBox.insertAdjacentElement("afterbegin", para);

        this.para = para;
    }

    remove() {
        setTimeout(() => {
            this.para.remove();
        }, 2900)
    }
}