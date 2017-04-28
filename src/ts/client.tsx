import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ROUTER} from './router';

window.onload = () => {
    ReactDOM.render(
        ROUTER,
        document.getElementById('app')
    );
};


