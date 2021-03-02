export class LargeLoading {
    constructor(type) {
		this.type = type;
		this.bg = document.createElement('div');
		this.main = document.querySelector("main");
		this.runner();

    }

    start() { 
		this.bg.classList.add("loading-main");
        this.main.insertAdjacentElement("afterbegin", this.bg);
    }

    end() {
		const existingBg = document.querySelector(".loading-main");
		existingBg.remove();
    }

	runner() {
		this.type === "start" ? this.start() : this.end();
	}
}