// store.ts
import {Store} from "react-stores";

export namespace CommonStore {

	// State interface
	export interface State {

	}

	// Store's state initial values
	let initialState: State = {};

	export let store: Store<State> = new Store<State>(initialState);
}