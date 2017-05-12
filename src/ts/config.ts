import {AppComponent} from "./components/layouts/app";
import {PageNotFoundComponent} from "./lib/components/page-not-found";
import {AppLoadingComponent} from "./lib/components/app-loading-component";

const config = {
	DEFAULT_CONTROLLER: 'pages',
	DEFAULT_ACTION: 'index',
	DEFAULT_LAYOUT_COMPONENT: AppComponent,
	DEFAULT_PAGE_NOT_FOUND_COMPONENT: PageNotFoundComponent,
	DEFAULT_LOADING_COMPONENT: AppLoadingComponent,
	TITLE: 'Isomorphic react ts',
	KEYWORDS: 'KEYWORDS',
	DESCRIPTION: 'DESCRIPTION',
	API_URL: 'http://metallapriem.ru/api',
	CUSTOM_ROUTES: [
		{
			path: '/helloworld',
			controller: 'pages',
			action: 'page'

		}, {
			path: '/cutrom/test1',
			controller: 'pages',
			action: 'page'
		}
	]
};

export let CONFIG = config;
