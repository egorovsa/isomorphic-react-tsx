import {PagesController} from "./pages-controller";
import {TestController} from "./test-controller";
import {Controllers} from "../lib/controllers/controllers";

export class AppControllers extends Controllers {
	public data;

	constructor(data) {
		super(data);

		this.pages = new PagesController(data);
		this.test = new TestController(data);
	}

	public pages;
	public test;
}