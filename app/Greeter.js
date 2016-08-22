/*
var config = require('./config.json');

module.exports = function() {
	var greet = document.createElement('div');
	//greet.textContent = 'Hi there and greeting!大家好';
	greet.textContent = config.greetText;
	return greet;
};
*/

import React, {Component, PropTypes} from 'react';
var Remarkable = require('remarkable');

import config from './config.json';
import styles from './Greeter.css';
import { GroceryList } from './GroceryList'
import FocusText from './FocusText';

class Greeter extends Component { 
	constructor() {
		super();
		this.name = 'ggggggggg';
	}

	render() {
		var md = new Remarkable();
		var place = '世界和平万岁!';
		return (
			<div className={styles.root}>
				<h1>react,react-dom,webpack,webpack-dev-server,babel组合测试</h1>
				<h3>FROM json.config:{config.greetText}</h3>
				<h3>Hello, {place}</h3>
				<GroceryList />
				<span dangerouslySetInnerHTML={{__html:md.render( '# I should read the **whole** book' )}} />
				<hr />
				<FocusText />
				<h1>{this.props.salutation}</h1>
				<h2>{(function(){return 123;})() }</h2>
				<h2>{ (()=>789)() }</h2>
				<h2>{ place + this.name } </h2>
			</div>
		);
	}
}
Greeter.propTypes = {
	salutation: PropTypes.string.isRequired
}
Greeter.defaultProps = {
	salutation: "Hello World"
}

export default Greeter;
