import * as React from "react";
import {AppComponent} from "../../components/laouts/app";
import {CommonStore} from "../../stores/common";
import MetaData = CommonStore.MetaData;

export class Controller {
	constructor(data) {
		this.data = data;
	}

	public data;

	public render(component: React.ComponentClass<any>, layout?: React.ComponentClass<any>) {
		return {
			component: component,
			layout: layout ? layout : null
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