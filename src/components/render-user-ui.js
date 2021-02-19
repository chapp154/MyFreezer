import {stringToHtml} from "../tools/string-to-html";

export const renderUserUi = async () => {

    const body = document.querySelector("body");
    const [loginHeader, loginMain] = [document.querySelector("header"), document.querySelector("main")];

    const userPageFetch = await fetch("../../dist/user.html");
    const userPageText = await userPageFetch.text();

    const userHtmlStart = userPageText.indexOf("<header>");
    const userHtmlEnd = (userPageText.indexOf("</main>") + 7);

    const finalUserHtml = userPageText.slice(userHtmlStart, userHtmlEnd);

    const doc = stringToHtml(finalUserHtml);
    const [userHeader, userMain] = [doc.querySelector("header"), doc.querySelector("main")];

    body.replaceChild(userHeader, loginHeader);
    body.replaceChild(userMain, loginMain);
}