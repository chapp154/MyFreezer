import {loginFormArrow, changeLabelContent, getFormSelection} from "../components/login-ui";
import {validateForm} from "../components/form-validations";



export const loginInit = () => {
    changeLabelContent();
    loginFormArrow();
    getFormSelection();
    getSignup();
}

const eventSignup = (e) => {
    e.preventDefault();
}

const getSignup = () => {
    const signupBtn = document.querySelector(".btn-form-submit");

    signupBtn.addEventListener("click", eventSignup);

    validateForm();

};
