import React from 'react';
import TableItem from './tableItem';
import NewItem from './newItem';

import * as Data from '../../data/sheetData';

export default class Table extends React.Component {

	componentWillMount() {
		this.setState( ...this.props )
	}

	componentDidMount() {
		this.setState( ...this.props )
	}

	componentWillReceiveProps() {
		this.setState( ...this.props )
	}

	render() {
		return this.state.loading 
		? ( <span>Carregando...</span> )
		: (
			<div className="table">
				<table>
					<thead>
						<tr>
							<th>Dia</th>
							<th>Descrição</th>
							<th>Previsto</th>
							<th>Realizado</th>
						</tr>
					</thead>
					<tbody>
						<NewItem submit={ this.props.recordNew }/>
						{
							this.props.data.map((item, i) => (
								<TableItem key={ i }
									id={ i }
									date={ item.date }
									type={ this.props.type }
									desc={ item.desc }
									estimated={ item.estimated }
									realized={ item.realized }
									delete={ this.props.deleteRecord }
								/>
							))
						}
					</tbody>
				</table>
			</div>
		);
	}
}