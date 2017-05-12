import * as React from "react";
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
		console.log('index');
		let dataPromise: Promise<any> = AppApi.pages.getPageData(slug).then((data: any) => {
			if (data.length === 0) {
				return this.pageNotFound();
			}

			PagesStore.store.setState({
				currentPage: data.Page
			});

			this.setMetaData({
				title: data.Page.seo_title,
				description: data.Page.seo_description,
				keywords: data.Page.seo_keywords
			});

			// this.hideMainLoading();

			return data;
		});

		return this.render(PagesComponent, dataPromise);
	}

	public page() {
		return this.render(PagesComponent, App1Component, {
			title: 'PagesComponent',
			description: 'description',
			keywords: 'keywords'
		});
	}

	public commonFilter() {
		return super.commonFilter().then(() => {
			return new Promise((resolve) => {
				resolve();
			})
		})
	}
}