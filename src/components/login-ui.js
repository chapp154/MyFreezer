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

    document.querySelectorAll(".login__options input").forEach((option, index) => {

        option.addEventListener("click", (e) => {

            const formOption = new FormSwitcher(e);

            formOption.changeInputIds(formOption.formState);
            formOption.createPasswordEl();
            formOption.changeBtn();
            getValidations(formOption.formState);

            changeStateMemory = [...changeStateMemory, formOption.formState];


    
        })
    })
}

class FormSwitcher {
    constructor(formState) {
        this.formState = formState.target.id;
    }
    
    createPasswordEl() {
        const passwordElementExist = document.getElementById("password-signup-check");
        
        if (this.formState === "signup" && !passwordElementExist) {

            const passwordInput = document.getElementById("password%signup");

            const newPasswordInput = passwordInput.cloneNode(false);
            newPasswordInput.id = "password-signup-check";
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

        const [email, password] = document.getElementsByClassName("form-input");

        email.id = `email%${type}`;
        password.id = `password%${type}`;

    }
}