import React from 'react';
import Months from 'months/months';

export default class Sheet extends React.Component {
	render() {
		return (
			<div className="bg">
				<div className="container">
					<Months type={ this.props.params.type }/>
					{ this.props.children }
				</div>
			</div>
		);
	}
}