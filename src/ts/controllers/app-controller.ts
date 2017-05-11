import {Controller} from "../lib/controllers/controller";

export class AppController extends Controller {
	constructor(data) {
		super(data);
	}

	public beforeFilter() {
		return super.beforeFilter().then((dataFromController) => {
			return new Promise((next) => {

				//some async here...
				next();

			})
		})
	}
}