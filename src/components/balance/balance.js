import React from 'react';
import { Link } from 'react-router';

import Table from 'table/table';
import Overall from 'overall/overall';

import * as Data from 'sheetData';

export default class Balance extends React.Component {

	componentWillMount() {
		this.setLoading();
	}

	componentDidMount() {
		this.fetchData(this.props.params)
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.params.month != nextProps.params.month) {
			this.setLoading()
			this.fetchData(nextProps.params)
		}else {
			this.changeType(nextProps.params.type)
		}
	}

	setLoading() {
		this.setState({
			loading: true,
			data: [],
			total: {
				accumulated: '-',
				incomming: '-',
				charged: '-',
				month: '-',
				total: '-'
			}
		})
	}

	changeType(type) {
		this.setState({
			loading: false,
			data: this.state.month[type]
		})
	}

	fetchData(props) {
		Data.getMonth(props.month)
			.then(result => {
				this.setState({
					loading: false,
					month: result,
					data: result[props.type],
					total: result.total
				})
			})
	}

	recordNew(record) {
		let params = this.props.params;

		Data.saveRecord(params.month, params.type, record).then(result => {
			this.fetchData(params)
		})
	}

	deleteRecord(id) {
		let params = this.props.params;

		Data.removeRecord(params.month, params.type, id).then(result => {
			this.fetchData(params);
		})
	}

	render() {
		return (
			<div>
				<div className="balance box">
					<ul className="header">
						<Link to={ `/planilha/`+this.props.params.month+`/receitas` }
							activeClassName="active">
							<li>Receitas</li>
						</Link>
						<Link to={ `/planilha/`+this.props.params.month+`/despesas` }
							activeClassName="active">
							<li>Despesas</li>
						</Link>
					</ul>
					<div className="content">
						<Table
							loading={ this.state.loading }
							data={ this.state.data } 
							type={ this.props.params.type }
							recordNew={ this.recordNew.bind(this) }
							deleteRecord={ this.deleteRecord.bind(this) }
						/>
					</div>
				</div>
				<Overall { ...this.state.total }/>
			</div>
		);
	}
}