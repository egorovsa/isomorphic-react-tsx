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
		currentPage: Page
	}

	let initialState: State = {
		currentPage: {
			id: 0,
			title: '',
			description: '',
			keywords: '',
			content: '',
			active: true
		}
	};

	export let store: Store<State> = new Store<State>(initialState);
}