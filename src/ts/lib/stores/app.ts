// store.ts
import {Store} from "react-stores";
import {CONFIG} from "../../config";
import * as React from "react";

export namespace AppStore {

	export interface MetaData {
		title: string,
		keywords?: string,
		description?: string
	}

	// State interface
	export interface State {
		appLoading: boolean,
		appLoadingComponent: React.ComponentClass<any>,
		pageNotFound: boolean,
		pageNotFoundComponent: React.ComponentClass<any>,
		metadata: MetaData
	}

	// Store's state initial values
	let initialState: State = {
		appLoading: false,
		appLoadingComponent: CONFIG.DEFAULT_LOADING_COMPONENT,
		pageNotFound: false,
		pageNotFoundComponent: CONFIG.DEFAULT_PAGE_NOT_FOUND_COMPONENT,
		metadata: {
			title: CONFIG.TITLE,
			keywords: CONFIG.KEYWORDS,
			description: CONFIG.DESCRIPTION
		}
	};

	export let store: Store<State> = new Store<State>(initialState);
}