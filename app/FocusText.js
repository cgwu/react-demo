import React, {Component} from 'react';

class FocusText extends Component {
	handleClick() {
		this.refs.myTextInput.focus();
	}
	render() {
		return (
			<div>
				<input type="text" ref="myTextInput" placeholder='Foo text' />
				<input type="button" value="Focus the 文本框"
				onClick={ this.handleClick.bind(this) } />
			</div>
		);
	}
}

export default FocusText;
