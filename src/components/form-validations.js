import {multiSelect} from "../tools/multiple-selector";

let [email, password] = document.getElementsByClassName("form-input");


const validationText = (type, input, inputEl) => {
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
}

let validation = {

    currInput: "",

    runFocusEvent: function (e) {

        let validationMsg = document.querySelector(".login__body-validation");

        if (validationMsg) validationMsg.remove();

        validationMsg = document.createElement("p");
        validationMsg.classList.add("login__body-validation");
        e.target.insertAdjacentElement("afterend", validationMsg);

        validation.currInput.addEventListener('input', (e) => validationMsg.innerHTML = validationText(validation.currInput.id, e.target.value, e.target));
    },

    ui: function (currInput, formType) {

        this.currInput = currInput;

        if (formType === "login") {

            const validationMsg = document.querySelector(".login__body-validation");
            if (validationMsg) validationMsg.remove();

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