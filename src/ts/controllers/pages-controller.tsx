import * as React from "react";
import {TestComponent} from "../components/pages/test-component";
import {PagesComponent} from "../components/pages/pages-component";
import {AppController} from "./app-controller";
import {AppApi} from '../api/app-api';
import {PagesStore} from "../stores/pages";
import {App1Component} from "../components/layouts/app1";
import objectAssign = require("object-assign");


export class PagesController extends AppController {
	constructor(data) {
		super(data);
	}

	public index(slug = 'opt') {
		let dataPromise: Promise<any> = AppApi.pages.getPageData(slug).then((data: any) => {
			if (data.length === 0) {
				return this.pageNotFound();
			}

			PagesStore.store.setState({
				currentPage: data.Page
			});

			return data;
		});

		return this.render(PagesComponent, dataPromise, {
			title: 'PagesComponent',
			description: 'description',
			keywords: 'keywords'
		});
	}

	public page() {
		return this.render(PagesComponent, App1Component);
	}

	public page1() {
		return this.render(TestComponent);
	}
}