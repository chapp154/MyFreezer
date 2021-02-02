import {multiSelect} from "../tools/multiple-selector";

let validation = {

    currInput: "",

    msgEl: document.querySelector(".login__body-validation"),

    removeMsgEl: function () {if (this.msgEl) this.msgEl.remove()},

    messageBody: function (type, input, inputEl) {
        switch (type) {
            case "email%signup":
                if (input.includes("@") && !input.includes(" ")) {
                    let splitInput = input.split("@");
            
                    if (splitInput[0].length > 0 && splitInput[1].includes(".")) {
                        splitInput = splitInput[1].split(".") 
            
                        if (splitInput[0].length > 0 && splitInput[1].length > 0) {
                            
                            inputEl.style.color = "rgba(91, 179, 101, 1)";
                            return "Good";
                        } 
                    }
                }
                return "Email is not valid";
            break;
            
            case "password%signup":
        }
        
        inputEl.style.color = "";
    },

    runFocusEvent: function (e) {

        validation.removeMsgEl();

        validation.msgEl = document.createElement("p");
        validation.msgEl.classList.add("login__body-validation");
        e.target.insertAdjacentElement("afterend", validation.msgEl);

        validation.currInput.addEventListener('input', (e) => validation.msgEl.innerHTML = validation.messageBody(validation.currInput.id, e.target.value, e.target));
    },

    ui: function (currInput, formType) {

        this.currInput = currInput;

        if (formType === "login") {

            this.removeMsgEl();

            currInput.removeEventListener("focus", this.runFocusEvent, true);
            return;
        }

        currInput.addEventListener("focus", this.runFocusEvent, true);
    }


}

export const getValidations = (formType) => {

    let [email, password] = document.getElementsByClassName("form-input");

    validation.ui(email, formType);
    //validationUI(password, formType)

};