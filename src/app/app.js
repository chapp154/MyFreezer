import {loginFormArrow, changeLabelContent, getFormSelection} from "../components/login-ui";
import {validationResult} from "../components/form-validations";
import {createUser} from "../firebase/auth/create-account";
import {Message} from "../tools/message";
import {customClickEvent} from "../tools/customClickEvent";
import {loginUser} from "../firebase/auth/login-user";
import {Visitor} from "../components/user-ui";

import firebase from 'firebase/app';
import "firebase/auth";

export const loginInit = () => {
    addFormHandler();
    changeLabelContent();
    loginFormArrow();
    getFormSelection();


}

export const userInit = () => {
    const visit = new Visitor;

    visit.signOutBtn();

}

const eventSignup = async (e) => {

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
const eventLogin = async (e) => {

    try {
        const user = await loginUser();

    } catch (error) {
        new Message(error.message, "warning");
    }


    var user = firebase.auth().currentUser;
if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}
 
};
export const addFormHandler = () => {
    const submitBtn = document.querySelector(".btn-form-submit");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        e.target.id === "btn-login" ? eventLogin(e) : eventSignup(e);
    });
};

