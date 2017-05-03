import {AppComponent} from "../components/app";
import * as React from "react";
import {TestComponent} from "../components/pages/test-component";
import {PagesComponent} from "../components/pages/pages-component";
import {AppController} from "./app-controller";
import {PagesActions} from "../actions/PagesAction";
import {API} from "../api";
import {PagesStore} from "../stores/pages";

export class PagesController extends AppController {
	constructor(data) {
		super(data);
	}

	public index() {

	}

	public page(callback?: (component) => void) {
		console.log('page pages data', this);

		API.getPageData(this.data.params['action']).then((data: PagesStore.Page) => {
			PagesStore.store.setState({
				page: data
			} as PagesStore.State);

			if (callback) {
				callback(this.render(PagesComponent))
			}
		});

		return this.render(PagesComponent);
	}

	public page1() {
		PagesActions.pagesCommonData(this.data.params['action']);

		return this.render(TestComponent);
	}
}