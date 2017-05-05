import {Controller} from "../lib/controllers/controller";

export class AppController extends Controller {
	constructor(data) {
		super(data);
	}

	public beforeFilter() {
		// console.log('before');
	}

}