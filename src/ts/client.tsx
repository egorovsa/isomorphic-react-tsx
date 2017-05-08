import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRouter} from './router';

window.onload = () => {
	let routing = new AppRouter;

    ReactDOM.render(
		routing.router(),
        document.getElementById('app')
    );
};


