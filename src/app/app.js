import { loginFormArrow, changeLabelContent, getFormSelection } from "../components/login-ui";
import { Message } from "../tools/message";
import {eventLogin, eventSignup} from "../components/login-ui";
import { Visitor } from "../user/user-ui";
import { loading } from "../tools/loading";

import firebase from 'firebase/app';
import "firebase/auth";

export const loginInit = () => {
    changeLabelContent();
    loginFormArrow();
    getFormSelection();
    addFormHandler();

	loading.end();
}

const addFormHandler = () => {
    const submitBtn = document.querySelector(".btn-form-submit");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        e.target.id === "btn-login" ? eventLogin(e) : eventSignup(e);
    });
};

