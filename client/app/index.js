import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import App from './components/app';

import configureStore from './core/store';

let store = configureStore();

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById( 'app' )
);
