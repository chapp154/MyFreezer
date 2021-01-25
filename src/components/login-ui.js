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
    document.getElementById("login").addEventListener("click", (e) => {

        const changeForm = new FormSwitcher(e);
        changeForm.changeInputIds(changeForm.formState);
        changeForm.changeBtn();

    })

    document.getElementById("signup").addEventListener("click", (e) => {

        const changeForm = new FormSwitcher(e);
        changeForm.changeInputIds(changeForm.formState);
        changeForm.changeBtn();

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
        console.log("kwak");
        const [emailLogin, passwordLogin] = multiSelect(["#email-login", "#password-login"]);
        if (emailLogin && type !== "login") {
            emailLogin.id = "email-reg";
            passwordLogin.id = "password-reg";
            return
        }

        const [emailReg, passwordReg] = multiSelect(["#email-reg", "#password-reg"]);
        if (emailReg && type !== "signup") {
            emailReg.id = "email-login";
            passwordReg.id = "password-login";
        }

    }

    runValidation() {
        getValidations();
    }
}