import {loginFormArrow, changeLabelContent, getFormSelection} from "../components/login-ui";
import {validationResult} from "../components/form-validations";
import {createUser} from "../firebase/auth/create-account";
import {Message} from "../tools/message";
import {customClickEvent} from "../tools/customClickEvent";



export const loginInit = () => {
    changeLabelContent();
    loginFormArrow();
    getFormSelection();

}

const eventSignup = async (e) => {

    if (e.target.id !== "btn-signup") return;

    const validationResultData = validationResult();

    if (e.target.id === "btn-signup" && validationResultData[0]) {
        e.target.disabled = true;
        e.target.innerHTML = '<i class="fas fa-spinner animation__rotate"></i>';

        try {
            const userCredential = await createUser(validationResultData[1].email, validationResultData[1].password);
            new Message(`Succesfully created, you can login now`, "success");
            setTimeout(() => {
                customClickEvent("input#login");

                const fillEmailEl = document.getElementById("email000login");
                fillEmailEl.value = userCredential.user.email;

            }, 500);

        } catch (error) {
            new Message(error.message, "warning");
            
        }

        e.target.disabled = false;
        e.target.textContent = 'Register';
    } else {
        new Message("Please fill in all necessary fields", "info");
    }
}
const addFormHandler = (() => {
    const submitBtn = document.querySelector(".btn-form-submit");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (e.target.id === "btn-login") {

            return;
        } else {
            eventSignup(e);
        }
    });
})();

