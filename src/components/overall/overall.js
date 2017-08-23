import React from 'react';

export default class Overall extends React.Component {
	render() {
		return (
			<div className="overall box">
				<table>
					<thead>
						<tr>
							<th>Acumulado</th>
							<th>Receitas</th>
							<th>Despesas</th>
							<th>Total Mês</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{ this.props.accumulated }</td>
							<td>{ this.props.incomming  }</td>
							<td>{ this.props.charged }</td>
							<td>{ this.props.month }</td>
							<td>{ this.props.total }</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}