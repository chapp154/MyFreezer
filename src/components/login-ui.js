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
debugger;

export const getFormSelection = () => {

    let changeStateMemory = [];

    document.querySelectorAll(".login__options input").forEach((option, index) => {

        option.addEventListener("click", (e) => {

            const formSelection = new FormSelector(e);

            formSelection.changeInputIds(formSelection.state);
            formSelection.createPasswordEl();
            formSelection.changeBtn();

            if (formSelection.state === "login" &&  changeStateMemory[changeStateMemory.length - 1] === "login" || 
                formSelection.state === "login" && changeStateMemory.length < 1)  {
                console.log("wuff");
                return;
            };
            getValidations(formSelection.state);

            changeStateMemory = [...changeStateMemory, formSelection.state];

    
        })
    })
}

class FormSelector {
    constructor(state) {
        this.state = state.target.id;
    }
    
    createPasswordEl() {
        const passwordElementExist = document.getElementById("password-signup-check");
        
        if (this.state === "signup" && !passwordElementExist) {

            const passwordInput = document.getElementById("password000signup");

            const newPasswordInput = passwordInput.cloneNode(false);
            newPasswordInput.id = "password-signup-check";
            newPasswordInput.setAttribute("placeholder", "Password again");
            newPasswordInput.classList.add("animation__slideOpen--fast");
    
            passwordInput.insertAdjacentElement("afterend", newPasswordInput);

            return 
        }
        if (this.state === "login" && passwordElementExist) {

            passwordElementExist.classList.add("animation__slideClose--fast")

            setTimeout(() => {
                passwordElementExist.remove();
            }, 200);
        }
    }

    changeBtn() {
        const btnForm = document.querySelector(".btn-form-submit");

        const btnSet = (text, id) => {
            btnForm.textContent = text;
            btnForm.id = id;
        }

        if (this.state === "login") {
            btnSet("Login", "login");
            return;
        }

        btnSet("Register", "signup");

    }

    changeInputIds(type) {
        const [email, password, passwordCheck] = document.getElementsByClassName("form-input");

        email.id = `email000${type}`;
        password.id = `password000${type}`;

        [email, password, passwordCheck].forEach(el => {if (el) el.value = ""});

    }
}