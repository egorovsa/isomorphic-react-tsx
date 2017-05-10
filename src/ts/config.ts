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
	API_URL: 'http://metallapriem.ru/api'
};

export let CONFIG = config;
