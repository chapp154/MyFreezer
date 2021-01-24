// Inject Sass
import "../style/sass/main.scss";

import {loginInit} from "./app/app";
import '@fortawesome/fontawesome-free/js/all';
import {getValidations} from "./components/form-validations";


loginInit();
getValidations();