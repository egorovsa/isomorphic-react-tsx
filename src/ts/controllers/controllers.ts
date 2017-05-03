import {PagesController} from "./pages-controller";

export class Controllers {
	public data;

	constructor(data) {
		this.data = data;
	}

	public pages() {
		return new PagesController(this.data);
	}
}