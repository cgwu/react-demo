/*
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
*/
import { applyMiddleware, combineReducers, createStore } from 'redux';
import axios from 'axios';
import React from 'react';
import {render} from 'react-dom';
import update from 'react-addons-update';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

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

/********************** 多个Reducer's demo ********************/
/*
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
*/

/*******************  多个middleware   *******************/
/*
const reducer = (state = 0, action) => {
	if (action.type === "INC" ) {
		return state  + 1;
	}
	else if(action.type === "DEC") {
		return state - 1;
	}
	else if(action.type === "E" ) {
		throw new Error("AAAAAAA!");
	}
	return state;
}

const logger = (store) => (next) => (action) => {
	console.log("logger middleware called", action);
	// action.type = "DEC";
	next(action);
}

const error = (store) => (next) => (action) => {
	console.log("error middleware called", action);
	try{
		next(action);
	} catch(e) {
		console.log("AHHHHHH!!", e);
	}
}

const middleware = applyMiddleware(logger, error);	// 相当于拦截器

const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
	console.log("store changed", store.getState());
});

store.dispatch({type: "INC"});
store.dispatch({type: "DEC"});
store.dispatch({type: "E"});
*/

/******** $push,$unshift,$splice,$set,$merge,$apply **********/
/*
let student = { name:'John Caster', grades:['A', 'C', 'B']};
let newStudent = update(student,  {grades: {$unshift: ['0']}});  // {grades: {$push: ['A']}},
newStudent.name = 'ggg';
console.log(student);
console.log(newStudent);
console.log(student === newStudent);
let newStudent2 = update(newStudent, { name : { $set: "ccc" },  grades: { $set: [ 'X', 'Y', 'Z' ] } });
console.log("newStudent", newStudent);
console.log("newStudent2", newStudent2);

let initArr = [ 1,2,'a','f','g','i' ];
let newArr = update( initArr, { $splice: [[2,2,'d',44]] } );
console.log(initArr);
console.log(newArr);

let obj = {a: 5, b: 3};
let newObj = update( obj, { $merge: { b: 6, c: 7} } );
console.log(obj);
console.log(newObj);

let newObj3 = update( obj, { b: { $apply: (val) => val * 11 } } );
console.log(obj);
console.log(newObj3);
*/

/*****************  Redux Async Actions   ********************/
const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
};
const reducer = (state=initialState, action) => {
	switch(action.type) {
		case "FETCH_USER_PENDING": {
			return {...state, fetching: true};
		}
		case "FETCH_USER_REJECTED": {
			return {...state, fetching:false, error: action.payload};
		}
		case "FETCH_USER_FULFILLED": {
			return {...state, fetching: false, fetched: true,
				users: action.payload
			};
		}
	}
	return state;
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

//store.dispatch({type: "FOO"});
store.dispatch({
	type: "FETCH_USERS",
	payload: axios.get("http://rest.learncode.academy/api/wstern/users")
});

/*
let obj1 = { name:'John Caster', grades:['A', 'C', 'B']};
let obj2 = {...obj1, age: 30, name: '胡子xxee' };
console.log(obj1);
console.log(obj2);
*/







