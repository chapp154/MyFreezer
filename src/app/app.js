import {loginFormArrow, changeLabelContent, getFormSelection} from "../components/login-ui";
import {validationResult} from "../components/form-validations";
import {createUser} from "../firebase/auth/create-account";



export const loginInit = () => {
    changeLabelContent();
    loginFormArrow();
    getFormSelection();

}

const eventSignup = async (e) => {
    e.preventDefault();
    const validationResultData = validationResult();

    if (e.target.id === "btn-signup" && validationResultData[0]) {

        try {
            const userCredential = await createUser(validationResultData[1].email, validationResultData[1].password);

        } catch (error) {
            
        }
    }
}
const signupHandler = (() => {
    const signupBtn = document.querySelector(".btn-form-submit");

    signupBtn.addEventListener("click", eventSignup);


})();
