import {AppComponent} from "../components/app";
import * as React from "react";
import {TestComponent} from "../components/pages/test-component";
import {PagesComponent} from "../components/pages/pages-component";
import {AppController} from "./app-controller";
import {PagesActions} from "../actions/PagesAction";

export class PagesController extends AppController {

	constructor(data) {
		super(data);
	}

	public index() {

	}

	public page() {
		PagesActions.pagesCommonData(this.data.params['action']);

		return this.render(TestComponent);
	}

	public page1() {
		PagesActions.pagesCommonData(this.data.params['action']);

		return this.render(PagesComponent);
	}
}