import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SNApp from "./App";

ReactDOM.render(
    <SNApp/>,
    document.getElementById('root')
);

serviceWorker.unregister();
