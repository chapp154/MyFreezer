import {multiSelect} from "../tools/multiple-selector";



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

const validationUI = (currInput, formType) => {

    if (formType === "login") {
        const validationMsg = document.querySelector(".login__body-validation");
        if (validationMsg) validationMsg.remove();
        currInput.removeEventListener("focus");
        return;
    }

    currInput.addEventListener("focus", (e) => {

        let validationMsg = document.querySelector(".login__body-validation");

        if (validationMsg) validationMsg.remove();
        
        validationMsg = document.createElement("p");
        validationMsg.classList.add("login__body-validation");
        e.target.insertAdjacentElement("afterend", validationMsg);
        validationMsg.innerHTML = validationText(currInput.id, e.target.value, e.target);

        currInput.addEventListener('input', (e) => validationMsg.innerHTML = validationText(currInput.id, e.target.value, e.target));
    })
}

const getFormElIds = () => {

    return new Promise((resolve, reject) => {

        let [email, password, passwordCheck] = multiSelect(["#email-reg", "#password-reg", "#password-reg-check"]);
        resolve ({email, password, passwordCheck});
    })
}

export const getValidations = async(formType) => {

    try {
        const regFormElements = await getFormElIds();

        validationUI(regFormElements.email, formType);
        validationUI(regFormElements.password, formType)
    } catch (error) {
        console.log(`Something is wrong with the promise ${error}`);
    }

};