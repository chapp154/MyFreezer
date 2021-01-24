import {multiSelect} from "../tools/multiple-selector";

export let [email, password1, password2, validationMsg] = multiSelect(["#email", "#password1", "#password2", ".login__body-validation"]);


const validationText = (type, input, inputEl) => {
    switch (type) {
        case "email":
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
        case "password1":
    }
    
    console.log("woof")

    inputEl.style.color = "";
    return "Email is not valid";
}

const validationUI = (currInput) => {

    currInput.addEventListener("focus", (e) => {

        if (validationMsg) validationMsg.remove();
        
        validationMsg = document.createElement("p");
        validationMsg.classList.add("login__body-validation");
        e.target.insertAdjacentElement("afterend", validationMsg);
        validationMsg.innerHTML = validationText(currInput.id, e.target.value, e.target);

        currInput.addEventListener('input', (e) => validationMsg.innerHTML = validationText(currInput.id, e.target.value, e.target));
    })
}

export const getValidations = () => {validationUI(email); validationUI(password1)};