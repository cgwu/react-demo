/*
var config = require('./config.json');

module.exports = function() {
	var greet = document.createElement('div');
	//greet.textContent = 'Hi there and greeting!大家好';
	greet.textContent = config.greetText;
	return greet;
};
*/

import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';

class Greeter extends Component { 
	render() {
		return (
			<div className={styles.root}>
				<h1>react,react-dom,webpack,webpack-dev-server,babel组合测试</h1>
				FROM json.config:{config.greetText}
			</div>
		);
	}
}

export default Greeter
