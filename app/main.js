/*
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
*/
import { combineReducers, createStore } from 'redux';
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
/*
// 最初步的redux demo
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
*/

// 多个Reducer's demo
const userReducer = (state={}, action) => {
	var newState = Object.assign({}, state);
	switch(action.type) {
		case "CHANGE_NAME": {
			console.log('userReducer CHANGE_NAME called');
			newState.name = action.payload;
			//state = {...state, name: action.payload};		// es7
			break;
		}
		case "CHANGE_AGE": {
			newState.age = action.payload;
			//state = {...state, age: action.payload};
			break;
		}
	}
	return newState;
}
const tweetsReducer = (state=[], action) => {
	switch(action.type) {
		case "ADD_TWEET": {
			state.push(action.payload);
			console.log('tweetsReducer CHANGE_NAME called');
		}
	}
	return state;
}

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer,
});

const store = createStore(reducers);
store.subscribe(() => {
	console.log("store changed", store.getState());
});

store.dispatch({type:"CHANGE_NAME", payload: "will"});
store.dispatch({type:"CHANGE_AGE", payload: 35});
store.dispatch({type:"ADD_TWEET", payload: 'Will@tweet'});
store.dispatch({type:"ADD_TWEET", payload: '222222@tweet'});



