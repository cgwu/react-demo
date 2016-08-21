import React, { Component } from 'react';

// Parent Component
class GroceryList extends Component {
	render() {
		return (
			<ul>
				<ListItem quantity="1" name="Bread" />
				<ListItem quantity="6" name="Eggs" />
				<ListItem quantity="2" name="Milk" />
				<ListItem quantity="10" name="面" />
			</ul>
		);
	}
}


// Child Component
class ListItem extends Component {
	render() {
		return (
			<li>
				{this.props.quantity} x {this.props.name}
			</li>
		);
	}
}

export { GroceryList, ListItem };