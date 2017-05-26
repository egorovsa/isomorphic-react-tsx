// store.ts
import {Store} from "react-stores";

export namespace CommonStore {

	// State interface
	export interface State {
		mainMenu: any[],
		sideNav: boolean,
		sideMap: boolean

	}

	// Store's state initial values
	let initialState: State = {
		mainMenu: [],
		sideNav: false,
		sideMap: false
	};

	export let store: Store<State> = new Store<State>(initialState);
}