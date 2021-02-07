import {multiSelect} from "../tools/multiple-selector";

let validation = {

    currInputEls: [],

    msgEl: "",

    useMsgEl: function (eventFocus) {

        if (!eventFocus) {
            const allMsgs = document.querySelectorAll(".login__body-validation");
            allMsgs.forEach(msg => msg.remove());
            return;
        }

        const validationPara = document.querySelector(`#${eventFocus.target.id} + p`);
        if (validationPara) {return [true, validationPara]};

        return [false, validationPara];
    },

    messageBody: function (type, input, inputEl) {
        switch (type) {
            case "email000signup":
                if (input.includes("@") && !input.includes(" ") && !input.includes(",")) {
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
            
            case "password000signup":
                if (input.length >= 4) {
                    return "OK";
                }
                return "not OK";
            break;

            case "password-signup-check":
                if (input === this.currInputEls[1].value && input.length >= 4) {
                    return "OK";
                }
                return "Try match";
        }
        
        inputEl.style.color = "";
    },

    runFocusEvent: function (eventFocus) {

        validation.useMsgEl(eventFocus);

        if (!validation.useMsgEl(eventFocus)[0]) {
            validation.msgEl = document.createElement("p");
            validation.msgEl.classList.add("login__body-validation");
            eventFocus.target.insertAdjacentElement("afterend", validation.msgEl);
            
        } else {validation.msgEl = validation.useMsgEl(eventFocus)[1]};

        validation.currInputEls.forEach(el => {
            el.addEventListener('input', (eventInput) => validation.msgEl.innerHTML = validation.messageBody(el.id, eventInput.target.value, eventInput.target));
        })
    },

    ui: function (currInputEls, formType) {
        currInputEls.forEach((el, index) => {
            this.currInputEls.splice(index, 1, el);
            if (formType === "login") {
                this.useMsgEl();
                el.removeEventListener("focus", this.runFocusEvent, true);
                return;
            }
    
            el.addEventListener("focus", this.runFocusEvent, true);
        })


    }


}

export const getValidations = (formType) => {

    let [email, password, passwordCheck] = document.getElementsByClassName("form-input");

    validation.ui([email, password, passwordCheck], formType);
    //validationUI(password, formType)

};