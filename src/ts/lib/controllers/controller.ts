import * as React from "react";
import {CommonStore} from "../../stores/common";
import MetaData = CommonStore.MetaData;
import {AppComponent} from "../../components/layouts/app";

export interface ControllerRender {
	component: React.ComponentClass<any>,
	layout: React.ComponentClass<any>,
	promises: () => Promise<any>
}


export interface RenderOptions {
	data?: () => Promise<any>,
	layout?: React.ComponentClass<any>
}

export class Controller {
	constructor(data) {
		this.data = data;
		this.location = data.location;
		this.query = data.location.query;
		this.hash = data.location.hash;
		this.search = data.location.search;
		this.pathname = data.location.pathname;
	}

	public data;
	public location;
	public query;
	public hash;
	public search;
	public pathname;

	public render(component: React.ComponentClass<any>, options?: RenderOptions): ControllerRender {
		let promises: () => Promise<any> = () => {
			return new Promise((resolve) => {
				resolve();
			})
		};

		if (options && options.data) {
			promises = options.data;
		}

		return {
			component: component,
			layout: options && options.layout ? options.layout : AppComponent,
			promises: promises
		}
	}

	// private metaData(metaData: MetaData): void {
	// 	let newMetaData: MetaData = {...CommonStore.store.state.metadata};
	// 	if (metaData.title) {
	// 		newMetaData.title = metaData.title
	// 	}
	//
	// 	if (metaData.description) {
	// 		newMetaData.description = metaData.description
	// 	}
	//
	// 	if (metaData.keywords) {
	// 		newMetaData.keywords = metaData.keywords
	// 	}
	//
	// 	CommonStore.store.setState({
	// 		metadata: newMetaData
	// 	} as CommonStore.State);
	// }


}