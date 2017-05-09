import * as React from "react";
import {TestComponent} from "../components/pages/test-component";
import {PagesComponent} from "../components/pages/pages-component";
import {AppController} from "./app-controller";
import {AppApi} from './../api/app-api';

require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

import {PagesStore} from "../stores/pages";
import {App1Component} from "../components/layouts/app1";


export class PagesController extends AppController {
	constructor(data) {
		super(data);
	}

	public index(slug) {
		let dataPromis: Promise<any> = AppApi.pages.getPageData(slug).then((data: any) => {

			PagesStore.store.setState({
				currentPage: data.Page
			});

			return data;
		});

		return this.render(PagesComponent, dataPromis);
	}

	public page() {
		return this.render(PagesComponent, null, App1Component);
	}

	public page1() {
		return this.render(TestComponent);
	}
}