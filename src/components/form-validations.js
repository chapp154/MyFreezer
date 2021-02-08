import {multiSelect} from "../tools/multiple-selector";

let validation = {

    currInputEls: [],

    msgEl: "",

    icons: {
        valid: '<i class="fas fa-check-circle signup-validation signup-validation__valid"></i>',
        invalid: '<i class="fas fa-times-circle signup-validation signup-validation__invalid"></i>',
    },

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
                const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|cz|sk|pl|eu|au|us|gb|io|de|sl|hu|sp|museum)\b/;

                if (emailRegex.test(input)) {
                    let splitInput = input.split("@");
            
                    if (splitInput[0].length > 0 && splitInput[1].includes(".")) {
                        splitInput = splitInput[1].split(".") 
            
                        if (splitInput[0].length > 0 && splitInput[1].length > 0) {  

                            return this.icons.valid;
                        } 
                    }
                }
                return this.icons.invalid;
            break;
            
            case "password000signup":
                const pswCheckEl = document.querySelector(`#${this.currInputEls[2].id} + p`);

                if (pswCheckEl && this.currInputEls[2].value !== input) {
                    pswCheckEl.innerHTML = this.icons.invalid;
                } else if (pswCheckEl) {
                    pswCheckEl.innerHTML = this.icons.valid;
                }

                if (input.length >= 4) {
                    return this.icons.valid;
                }
                return this.icons.invalid;
            break;

            case "password-signup-check":
                if (input === this.currInputEls[1].value && input.length >= 4) {
                    return this.icons.valid;
                }
                return this.icons.invalid;
        }
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