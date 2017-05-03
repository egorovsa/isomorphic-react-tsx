import {PagesController} from "./pages-controller";

export class Controllers {
	constructor(data) {
		this.pages = new PagesController(data);
	}

	public pages;
}