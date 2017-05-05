import * as React from "react";
import {CommonStore} from "../../stores/common";
import MetaData = CommonStore.MetaData;
import {UtilsService} from "../../services/UtilsService";

export class Controller {
	constructor(data) {
		this.data = data;
	}

	public component;
	public layout;

	public data;

	public render(component: React.ComponentClass<any>, ...args: Array<React.ComponentClass<any> | Promise<any>>) {
		let promise: Promise<any> = new Promise((resolve, reject) => {
			resolve();
		});

		let layout: React.ComponentClass<any> = null;

		args.map((arg) => {
			if (UtilsService.isPromise(arg as Promise<any>)) {
				promise = arg as Promise<any>;
			} else {
				layout = arg as React.ComponentClass<any>
			}
		});

		this.component = component;
		this.layout = layout;

		return {
			component: component,
			layout: layout,
			promise: promise
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