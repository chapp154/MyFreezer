import {multiSelect} from "../tools/multiple-selector";


const [email, password1, password2] = multiSelect(["#email", "#password1", "#password2"]);

export const emailValidation = () => {
    email.addEventListener('beforeinput', (e) => {

        console.log(e.target.value);

        let inputText = e.target.value;

        const test = document.querySelector(".login__form-btn");
        if (inputText.includes("@") && inputText.includes(".")) test.textContent = `${octicons.alert}`;

    })
}
