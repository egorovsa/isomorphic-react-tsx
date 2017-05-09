// store.ts
import {Store} from "react-stores";
import {CONFIG} from "../config";

export namespace CommonStore {

	export interface MetaData {
		title: string,
		keywords?: string,
		description?: string
	}

	// State interface
	export interface State {
		metadata: MetaData
	}

	// Store's state initial values
	let initialState: State = {
		metadata: {
			title: CONFIG.TITLE,
			keywords: CONFIG.KEYWORDS,
			description: CONFIG.DESCRIPTION
		}
	};

	export let store: Store<State> = new Store<State>(initialState);
}