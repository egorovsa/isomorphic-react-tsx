import * as React from 'react';
import {Store, StoreComponent} from "react-stores";
import {PagesStore} from "../../stores/pages";
import {API} from "../../api";

export interface Props {
	params?: any
}

export interface State {

}

export interface StoresState {
	pages: Store<PagesStore.State>
}

export class PagesComponent extends StoreComponent<Props, State, StoresState> {
	constructor() {
		super({
			pages: PagesStore.store
		});
	}

	storeComponentDidMount() {
		API.getPageData(this.props.params['slug']).then((data: PagesStore.Page) => {
			let pages = this.stores.pages.state.pages.concat([]);

			pages.push(data);

			this.stores.pages.setState({
				pages: pages
			});
		})
	}

	private getContent() {
		if (this.stores.pages.state.pages[0]) {
			return this.stores.pages.state.pages[0].content;
		}

		return '';
	}

	public render() {
		return (
			<div>
				{this.getContent()}
			</div>
		);
	}
}