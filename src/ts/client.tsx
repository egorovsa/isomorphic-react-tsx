import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppRouter} from './router';
import {Store, StoreComponent} from "react-stores";
import {AppStore} from "./lib/stores/app";
import {CONFIG} from "./config";

let routing = new AppRouter;

export interface StoresState {
	app: Store<AppStore.State>
}

class MainComponent extends StoreComponent<any, any, StoresState> {
	constructor() {
		super({
			app: AppStore.store
		});
	}

	getPageNotFound(): JSX.Element {
		return React.createElement(this.stores.app.state.pageNotFoundComponent)
	}

	getLoadindPage(): JSX.Element {
		return React.createElement(this.stores.app.state.appLoadingComponent, {active: this.stores.app.state.appLoading})
	}

	getLayout(): JSX.Element {
		if (this.stores.app.state.pageNotFound) {
			return (
				<span>
					{this.getPageNotFound()}
				</span>
			)
		} else {
			return (
				<span>
					{this.getLoadindPage()}
				</span>
			)
		}
	}

	public render() {
		return (
			<div>
				{this.getLayout()}
			</div>
		);
	}
}

window.onload = () => {
	ReactDOM.render(
		<div>
			<MainComponent/>
			{routing.router()}
		</div>,
		document.getElementById('app')
	)
	;
};


