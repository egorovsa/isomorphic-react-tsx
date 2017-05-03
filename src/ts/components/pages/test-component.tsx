import * as React from 'react';
import {Store, StoreComponent} from "react-stores";
import {PagesStore} from "../../stores/pages";
import {API} from "../../api";
import {PagesActions} from "../../actions/PagesAction";

export interface Props {
	params?: any
}

export interface State {

}

export interface StoresState {
	pages: Store<PagesStore.State>
}

export class TestComponent extends StoreComponent<Props, State, StoresState> {
	constructor() {
		super({
			pages: PagesStore.store
		});
	}



	public render() {
		return (
			<div>
				test
			</div>
		);
	}
}