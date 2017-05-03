import * as React from "react";
import {AppComponent} from "../components/app";

export class AppController {

	constructor(data) {
		this.data = data;
		this.layout = React.createElement(AppComponent, this.data);
	}

	public data;
	public layout;

	public setLayout(component) {
		this.layout = React.createElement(component, this.data);
	}

	public render(component) {
		return React.createElement(component, this.data);
	}
}