import {PagesApi} from "./pages-api";

class Api {
	constructor() {
		this.pages = new PagesApi;
	}

	public pages: PagesApi;
}

export let AppApi = new Api();
