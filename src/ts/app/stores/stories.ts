// store.ts
import {Store} from "react-stores";

export namespace StoriesStore {
	export interface Story {
		guid: number,
		author: string,
		title: string,
		date: Date,
		body: string,
	}

	export interface State {
		currentPage: Story
	}

	let initialState: State = {
		currentPage: {
			guid: 0,
			author: '',
			title: '',
			date: new Date(),
			body: '',
		}
	};

	export let store: Store<State> = new Store<State>(initialState);
}