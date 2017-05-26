import * as React from "react";
import {PagesComponent} from "../components/pages/pages-component";
import {AppController} from "./app-controller";
import objectAssign = require("object-assign");
import {MainPageComponent} from "../components/pages/main-page";

export class PagesController extends AppController {
	constructor(data) {
		super(data);
	}

	public main() {
		this.showMainLoading();


		let dataProm = Promise.all([]).then((data) => {


			this.hideMainLoading();
			return data;
		});

		return this.render(MainPageComponent, dataProm);
	}

	public index(id) {

		return this.render(PagesComponent);
	}

	public commonFilter() {
		return super.commonFilter().then(() => {
			return new Promise((resolve) => {
				resolve();
			})
		})
	}
}