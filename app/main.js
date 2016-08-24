/*
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
*/
import { createStore } from 'redux';
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Layout from './Layout';

import './main.css';

/*
render(<Greeter salutation='您好@_@!' />, document.getElementById('root'));
*/
/*
render(<Layout />, document.getElementById('root'));
*/

const reducer = function (state, action) {
	if(action.type === "INC"){
		return state + action.payload;
	}
	if(action.type === "DEC"){
		return state - action.payload;
	}
	return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
	console.log("store changed", store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 1});
