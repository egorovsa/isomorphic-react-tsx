import {TestComponent} from "../components/pages/test-component";
import {AppController} from "./app-controller";

export class TestController extends AppController {
	constructor(data) {
		super(data);
	}

	public index() {
		return this.render(TestComponent);
	}
}