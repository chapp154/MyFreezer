import {multiSelect} from '../tools/multiple-selector'
import {getValidations} from "./form-validations";

export const loginFormArrow = () => {
    const elements = document.querySelectorAll(".login-label-arrow");
    elements.forEach(el => {
        el.addEventListener("click", (e) => changeLabelContent(e));
    })
} 

export const changeLabelContent = (e, contentToReplace = "Login") => {
    if (e) {
        contentToReplace = e.srcElement.innerText;
        e.target.setAttribute("data-after", contentToReplace);
        return
    }
    const loginBtn = document.querySelector(".login-label-arrow:nth-child(4)");
    loginBtn.setAttribute("data-after", contentToReplace);
}

export const getFormOption = () => {

    let changeStateMemory = [];

    document.querySelectorAll(".login__options input").forEach(option => {

        option.addEventListener("click", (e) => {

            const formOption = new FormSwitcher(e);

            formOption.changeInputIds(formOption.formState);
            formOption.createPasswordEl();
            formOption.changeBtn();

            if (!changeStateMemory.includes("signup") && formOption.formState === "signup") {
                formOption.runValidation();
            }     
            
            changeStateMemory.push(formOption.formState);

    
        })
    })
}

class FormSwitcher {
    constructor(formState) {
        this.formState = formState.target.id;
    }
    
    createPasswordEl() {
        const passwordElementExist = document.getElementById("password-reg-check");
        
        if (this.formState === "signup" && !passwordElementExist) {

            const passwordInput = document.getElementById("password-reg");

            const newPasswordInput = passwordInput.cloneNode(false);
            newPasswordInput.id = "password-reg-check";
            newPasswordInput.setAttribute("placeholder", "Password again");
            newPasswordInput.classList.add("animation__slideOpen--fast");
    
            passwordInput.insertAdjacentElement("afterend", newPasswordInput);

            return 
        }
        if (this.formState === "login" && passwordElementExist) {

            passwordElementExist.classList.add("animation__slideClose--fast")

            setTimeout(() => {
                passwordElementExist.remove();
            }, 200);
        }
    }

    changeBtn() {

        const btnForm = document.getElementById("btn-confirm");

        this.formState === "login" ? btnForm.textContent = "Login" : btnForm.textContent = "Register";
    }

    changeInputIds(type) {

        const [email, password] = multiSelect([".login__body input:nth-child(1)", ".login__body input:nth-child(2)"]);

        if (type === "login") {
            email.id = "email-login";
            password.id = "password-login";
            return
        }

        email.id = "email-reg";
        password.id = "password-reg";

    }

    formStateMemory(currState) {

    }

    runValidation() {
        getValidations();
    }
}