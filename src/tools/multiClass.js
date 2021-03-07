export const multiClass = (el, ...classes) => {
	classes.forEach(curr => el.classList.add(curr));

	return;
}