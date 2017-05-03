import {PagesController} from "./pages-controller";

export class Controllers {
	public data;

	constructor(data) {
		this.data = data;
		this.pages = new PagesController(data);
	}

	public pages;

	public isPage(controller: string, action: string, callback: () => void) {
		if (this[controller]) {
			if (this[controller][action]) {
				callback()
			} else {

			}
		} else {

		}
	}


}