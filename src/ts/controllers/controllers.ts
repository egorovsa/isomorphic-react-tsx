import {PagesController} from "./pages-controller";
import {TestController} from "./test-controller";

export class Controllers {
	public data;

	constructor(data) {
		this.data = data;
		this.pages = new PagesController(data);
		this.test = new TestController(data);
	}

	public pages;
	public test;

	public isPage(controller: string, action: string, callback: (err: boolean) => void): void {
		if (this[controller]) {
			if (this[controller][action]) {
				callback(null)
			} else {
				callback(true)
			}
		} else {
			callback(true)
		}
	}


}