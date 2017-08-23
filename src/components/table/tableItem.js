import React from 'react';
import NewItem from './newItem';

export default class TableItem extends React.Component {

	constructor() {
		super();

		this.state = {
			editing: false
		}
	}

	render() {
		return (
			<tr className={ this.props.type }>
				<td>
					<span className="delete"
						onClick={ () => this.props.delete(this.props.id) }>X</span>
					{ this.props.date }
				</td>
				<td>{ this.props.desc }</td>
				<td>{ this.props.estimated }</td>
				<td>{ this.props.realized }</td>
			</tr>
		);
	}
}