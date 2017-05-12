// store.ts
import {Store} from "react-stores";

export namespace PagesStore {
	export interface Page {
		id: number,
		seo_title: string,
		seo_description: string,
		seo_keywords: string,
		content: string,
		active: boolean
	}

	export interface State {
		currentPage: Page
	}

	let initialState: State = {
		currentPage: {
			id: 0,
			seo_title: '',
			seo_description: '',
			seo_keywords: '',
			content: '',
			active: true
		}
	};

	export let store: Store<State> = new Store<State>(initialState);
}