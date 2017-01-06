import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './router';

window.onload = () => {
    ReactDOM.render(
        React.createElement(Router, {history: browserHistory}, routes),
        document.getElementById('app')
    );
};


