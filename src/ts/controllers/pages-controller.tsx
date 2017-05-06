import * as React from "react";
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

	public index(a, b, c, d, e, r, f, g, h) {
		console.log(a, b, c, d, e, r, f, g, h);
		let helloworld = React.createClass({
			render() {
				return (
					<div>Hello world</div>
				);
			}
		});


		return this.render(helloworld);
	}

	public page(a, b, c, d, e, r, f, g, h) {
		console.log(a, b, c, d, e, r, f, g, h);

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