import {multiSelect} from "../tools/multiple-selector";

let [email, password] = document.getElementsByClassName("form-input");

let validation = {

    currInput: "",

    msgEl: document.querySelector(".login__body-validation"),

    removeMsgEl: function () {if (this.msgEl) this.msgEl.remove()},

    messageBody: function (type, input, inputEl) {
        switch (type) {
            case "email-reg":
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
            break;
            case "password-reg":
        }
        
        inputEl.style.color = "";
        return "Email is not valid";
    },

    runFocusEvent: function (e) {

        validation.removeMsgEl();

        validation.msgEl = document.createElement("p");
        validation.msgEl.classList.add("login__body-validation");
        e.target.insertAdjacentElement("afterend", validation.msgEl);

        validation.currInput.addEventListener('input', (e) => validation.msgEl.innerHTML = validationText(validation.currInput.id, e.target.value, e.target));
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

    validation.ui(email, formType);
    //validationUI(password, formType)

};