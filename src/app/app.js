import { loginFormArrow, changeLabelContent, getFormSelection } from "../components/login-ui";
import { validationResult } from "../components/form-validations";
import { createUser } from "../firebase/auth/create-account";
import { Message } from "../tools/message";
import { customClickEvent } from "../tools/customClickEvent";
import { loginUser } from "../firebase/auth/login-user";
import { Visitor } from "../components/user-ui";
import{ UserData } from "../user/user-model";

import firebase from 'firebase/app';
import "firebase/auth";

export const loginInit = () => {
    addFormHandler();
    changeLabelContent();
    loginFormArrow();
    getFormSelection();


}

export const userInit = (user) => {
    const visit = new Visitor(user);
    visit.signOutBtn();

    new UserData(user);
    

}

const eventSignup = async (e) => {

    const validationResultData = validationResult();

    if (e.target.id === "btn-signup" && validationResultData[0]) {
        e.target.disabled = true;
        e.target.innerHTML = '<i class="fas fa-spinner animation__rotate"></i>';

        try {
            const userCredential = await createUser(validationResultData[1].email, validationResultData[1].password);

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
    e.target.disabled = true;
    e.target.innerHTML = '<i class="fas fa-spinner animation__rotate"></i>';

    try {
        const user = await loginUser();
        new Message("Success, loging in...", "success");
        e.target.textContent = 'Success';
        return;

    } catch (error) {
        new Message(error.message, "warning");
    }

    e.target.disabled = false;
    e.target.textContent = 'Login';
};
export const addFormHandler = () => {
    const submitBtn = document.querySelector(".btn-form-submit");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        e.target.id === "btn-login" ? eventLogin(e) : eventSignup(e);
    });
};

