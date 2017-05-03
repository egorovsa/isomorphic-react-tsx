import {PagesController} from "./pages-controller";

export class Controllers {
	public data;

	constructor(data) {
		this.data = data;
		this.pages = new PagesController(data);
	}

	public pages;
}