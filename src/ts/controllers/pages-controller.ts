import {TestComponent} from "../components/pages/test-component";
import {PagesComponent} from "../components/pages/pages-component";
import {AppController} from "./app-controller";
import {API} from "../api";
import {PagesStore} from "../stores/pages";
import {App1Component} from "../components/layouts/app1";

export class PagesController extends AppController {
	constructor(data) {
		super(data);
	}

	public index() {
		return this.render(TestComponent);
	}

	public page() {

		return this.render(PagesComponent, {
			data: this.getPagesData,
			layout: App1Component
		});
	}

	private getPagesData = (): Promise<any> => {
		return new Promise((resolve, reject) => {
			API.getPageData(this.data.params['action']).then((data: PagesStore.Page) => {
				PagesStore.store.setState({
					currentPage: data
				} as PagesStore.State);

				resolve();
			});
		});
	};

	public page1() {
		return this.render(TestComponent);
	}
}