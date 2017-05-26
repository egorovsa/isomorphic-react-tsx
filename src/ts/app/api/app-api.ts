import {StoriesApi} from "./stories-api";
import {PagesApi} from "./pages-api";

class ApiClass {
	constructor() {
		this.stories = new StoriesApi;
		this.pages = new PagesApi;
	}

	public pages: PagesApi;
	public stories: StoriesApi;
}

export let AppApi = new ApiClass();
