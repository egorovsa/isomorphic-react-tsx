import * as React from "react";
import {CommonStore} from "../../stores/common";
import MetaData = CommonStore.MetaData;
import {UtilsService} from "../../services/UtilsService";
import {ComponentClass} from "react";

export interface ControllerRender {
	component: React.ComponentClass<any>,
	layout: React.ComponentClass<any>,
	promises: () => Promise<any>
}


export interface RenderOptions {
	data?: () => Promise<any>,
	layout?: React.ComponentClass<any>
}
export interface BeforeFilter {
	promises: Promise<any>
}

export class Controller {
	constructor(data) {
		this.data = data;
	}

	public data;

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
			layout: options && options.layout ? options.layout : null,
			promises: promises
		}
	}

	public beforeFilter(): BeforeFilter {
		return {
			promises: Promise.all([])
		}
	}

	private metaData(metaData: MetaData): void {
		let newMetaData: MetaData = {...CommonStore.store.state.metadata};
		if (metaData.title) {
			newMetaData.title = metaData.title
		}

		if (metaData.description) {
			newMetaData.description = metaData.description
		}

		if (metaData.keywords) {
			newMetaData.keywords = metaData.keywords
		}

		CommonStore.store.setState({
			metadata: newMetaData
		} as CommonStore.State);
	}


}