import {loginFormArrow, changeLabelContent, getFormSelection} from "../components/login-ui";
import {validationResult} from "../components/form-validations";
import {createUser} from "../firebase/auth/create-account";
import {Message} from "../tools/message";



export const loginInit = () => {
    changeLabelContent();
    loginFormArrow();
    getFormSelection();

}

const eventSignup = async (e) => {
    e.preventDefault();
    const validationResultData = validationResult();

    if (e.target.id === "btn-signup" && validationResultData[0]) {
        e.target.disabled = true;
        e.target.innerHTML = '<i class="fas fa-spinner animation__rotate"></i>';

        try {
            const userCredential = await createUser(validationResultData[1].email, validationResultData[1].password);

        } catch (error) {
            
        }

        e.target.disabled = false;
        e.target.textContent = 'Register';
    } else {
        new Message("Not added", "info");
    }
}
const signupAddHandler = (() => {
    const signupBtn = document.querySelector(".btn-form-submit");

    signupBtn.addEventListener("click", eventSignup);


})();

