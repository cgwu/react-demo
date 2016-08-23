import React, {Component} from 'react';
import Header from './Header';

export default class Layout extends Component {
	constructor() {
		super();
		this.state = {title: 'gg'};
	}

	changeTitle(title){
		this.setState({title});	// es6: {title} => {title: title}
	}

	render() {
		/*
		setTimeout(()=>{
			this.setState({title: 'cc中国'});
		}, 2000);
		*/
		return (
			<div>
			<Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}> </Header>
			</div>
		);
	}
}