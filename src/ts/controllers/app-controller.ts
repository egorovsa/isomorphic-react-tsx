import {Controller} from "../lib/controllers/controller";

export class AppController extends Controller {
	constructor(data) {
		super(data);
	}

	public commonFilter() {
		return super.commonFilter().then((dataFromController) => {
			return new Promise((next) => {

				//some async here...
				next();

			})
		})
	}
}