import {stringToHtml} from "../tools/string-to-html";

export const renderUi = async (uiStyle) => {



    const body = document.querySelector("body");
    const [oldHeader, oldMain] = [document.querySelector("header"), document.querySelector("main")];

    const userPageFetch = uiStyle === "login" ? await fetch("../../src/login.html") : await fetch("../../src/user.html");
    const userPageText = await userPageFetch.text();

	const userHtmlStart = userPageText.indexOf("<header");
	const userHtmlEnd = (userPageText.indexOf("</main>") + 7);

	const finalUserHtml = userPageText.slice(userHtmlStart, userHtmlEnd);


	const doc = stringToHtml(finalUserHtml);
	const [userHeader, userMain] = [doc.querySelector("header"), doc.querySelector("main")];

	for (let section of [oldHeader, oldMain]) {
		section.classList.add("animation__fadeOut--fast");
	}

	setTimeout(() => {
		body.replaceChild(userHeader, oldHeader);
		body.replaceChild(userMain, oldMain);
	}, 300);


	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`${uiStyle} interface loaded`);
			reject();
		}, 301);
	});

}