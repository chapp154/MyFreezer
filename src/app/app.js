import {loginFormArrow, changeLabelContent, getFormSelection} from "../components/login-ui";
import {validateForm} from "../components/form-validations";



export const loginInit = () => {
    changeLabelContent();
    loginFormArrow();
    getFormSelection();
}

const getSignup = () => {
    const signupBtn = document.getElementById("signup");

    if (!signupBtn) {console.log("btn is not there"); return;};
}
