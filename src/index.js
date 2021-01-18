// Inject Sass
import "../style/sass/main.scss";

import {loginInit} from "./app/app";
import {emailValidation} from "./components/form-validations";
import '@fortawesome/fontawesome-free/js/all';

loginInit();
emailValidation();
