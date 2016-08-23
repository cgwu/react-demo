import React, {Component} from 'react';
import Title from './Header/Title';

export default class Header extends Component {

	handleChange(e){
		this.props.changeTitle(e.target.value);
	}

	render(){
		return (
			<div>
			<Title title={this.props.title}></Title>
			<input value={this.props.title} onChange={this.handleChange.bind(this)} />
			<Title title={"Other Title!"}></Title>
			</div>
		);
	}
}