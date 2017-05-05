import * as React from "react";
import {CommonStore} from "../../stores/common";
import MetaData = CommonStore.MetaData;
import {UtilsService} from "../../services/UtilsService";

export interface ControllerRender {
	component: React.ComponentClass<any>,
	layout: React.ComponentClass<any>,
	promises: Promise<any>
}

export interface BeforeFilter {
	promises: Promise<any>
}

export class Controller {
	constructor(data) {
		this.data = data;
	}

	public data;

	public render(component: React.ComponentClass<any>, ...args: Array<React.ComponentClass<any> | Promise<any>>): ControllerRender {
		let promises: Promise<any>[] = [];
		let layout: React.ComponentClass<any> = null;

		args.map((arg) => {
			if (UtilsService.isPromise(arg as Promise<any>)) {
				promises.push(arg as Promise<any>);
			} else {
				layout = arg as React.ComponentClass<any>
			}
		});

		return {
			component: component,
			layout: layout,
			promises: Promise.all(promises)
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