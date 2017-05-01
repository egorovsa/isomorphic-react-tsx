// store.ts
import {Store} from "react-stores";

export namespace PagesStore {
	export interface Page {
		id: number,
		title: string,
		description: string,
		keywords: string,
		content: string,
		active: boolean
	}

	export interface State {
		pages: Page[]
	}

	let initialState: State = {
		pages: []
	};

	export let store: Store<State> = new Store<State>(initialState);
}