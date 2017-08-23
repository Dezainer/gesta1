import React from 'react';
import { Link } from 'react-router';

export default class Monhts extends React.Component {
	constructor(){
		super();

		this.state = {
			months: [
				'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
			]
		}
	}

	render() {
		return (
			<div className="months box">
				<ul>
					{
						this.state.months.map((month, index) => (
							<Link key={ index } to={ `/planilha/`+month+'/'+this.props.type }
								activeClassName="active">
								<li>{ month }</li>
							</Link>
						))
					}
				</ul>
			</div>
		);
	}
}