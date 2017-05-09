import {PagesController} from "../../controllers/pages-controller";
export class Controllers {
	public data;
	public pages;

	constructor(data) {
		this.data = data;
		this.pages = new PagesController(data);
	}

	public isAction(controller: string, action: string): boolean {
		return !!this[controller][action];
	}

	public isController(controller: string): boolean {
		return !!this[controller];
	}
}