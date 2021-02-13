import {loginFormArrow, changeLabelContent, getFormSelection} from "../components/login-ui";
import {validateForm} from "../components/form-validations";



export const loginInit = () => {
    changeLabelContent();
    loginFormArrow();
    getFormSelection();
}

const eventSignup = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (e.target.id === "btn-signup" && isValid) {

    }
}
const getSignup = (() => {
    const signupBtn = document.querySelector(".btn-form-submit");

    signupBtn.addEventListener("click", eventSignup);


})();
