import {email, password1, password2, validationMsg} from "./form-validations";


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
    document.querySelectorAll(".login__options input").forEach(element => {
        element.addEventListener("click", (e) => {
            const changeForm = new FormSwitcher(e);
            changeForm.switchFormInputs();
            changeForm.changeBtn();
        })
    })
}

class FormSwitcher {
    constructor(formState) {
        this.formState = formState.target.id;
    }
    
    switchFormInputs() {
        const passwordElementExist = document.getElementById("password2");
        
        if (this.formState === "signup" && !passwordElementExist) {

            const passwordInput = document.getElementById("password1");

            const newPasswordInput = passwordInput.cloneNode(false);
            newPasswordInput.id = "password2";
            newPasswordInput.setAttribute("placeholder", "Password again");
            newPasswordInput.classList.add("animation__slideOpen--fast");
    
            passwordInput.insertAdjacentElement("afterend", newPasswordInput);

            email.classList.add("wuff");
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
}