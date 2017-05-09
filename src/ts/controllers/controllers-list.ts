import {TestController} from "./test-controller";
import {Controllers} from "../lib/controllers/controllers";

export class ControllersList extends Controllers {
	public data;

	constructor(data) {
		super(data);

		this.test = new TestController(data);
	}

	public test;
}