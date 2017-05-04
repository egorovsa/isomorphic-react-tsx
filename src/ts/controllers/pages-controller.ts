import {TestComponent} from "../components/pages/test-component";
import {PagesComponent} from "../components/pages/pages-component";
import {AppController} from "./app-controller";
import {PagesActions} from "../actions/PagesAction";
import {API} from "../api";
import {PagesStore} from "../stores/pages";
import {App1Component} from "../components/laouts/app1";

export class PagesController extends AppController {
	constructor(data) {
		super(data);
	}

	public index() {
		return this.render(TestComponent);
	}

	public page(callback?: (component) => void) {

		API.getPageData(this.data.params['action']).then((data: PagesStore.Page) => {
			PagesStore.store.setState({
				page: data
			} as PagesStore.State);

			if (callback) {
				callback(this.render(PagesComponent, App1Component))
			}
		});

		return this.render(PagesComponent, App1Component);
	}

	public page1() {
		PagesActions.pagesCommonData(this.data.params['action']);

		return this.render(TestComponent);
	}
}