import React from 'react';

export default class NewItem extends React.Component {

	constructor() {
		super();

		this.state = {
			unfocused: true
		}
	}

	componentWillMount() {
		this.cleanNewItemState();
	}

	componentDidMount() {
		this.addClickoutListener();
	}

	addClickoutListener() {
		window.addEventListener('click', (e) => {
			e.target.parentElement.classList.value != 'new' &&
				this.unfocus();
		}, null)
	}

	focus() {
		this.setState({
			unfocused: false
		});
	}

	unfocus() {
		this.cleanNewItemState();
		this.setState({
			unfocused: true
		});
	}

	cleanNewItemState() {
		this.setState({
			new: {
				date: new Date().getDate(),
				desc: '',
				estimated: 0,
				realized: 0
			}
		})
	}

	saveNewText(text, name) {
		let newItem = this.state.new;
		newItem[name] = text;

		this.setState({
			new: newItem
		})
	}

	handleKeyPress(e) {
		if(e.key == "Enter") {
			this.unfocus();
			this.props.submit(
				this.state.new
			);
		}
	}

	render() {
		return this.state.unfocused
		? (
			<tr className="new" 
				onClick={() => this.focus()}>
				<td></td>
				<td colSpan={ 5 } className="label">
					+ Novo Registro
				</td>
			</tr>
		)
		: (
			<tr className="new" onKeyPress={ (e) => this.handleKeyPress(e) }>
				<td><input type="number" name="date" autoFocus
						value={ this.state.new.date }
						onChange={e => this.saveNewText(e.target.value, e.target.name)}>
					</input>
				</td>
				<td><input type="text" name="desc"
						value={ this.state.new.sc }
						onChange={e => this.saveNewText(e.target.value, e.target.name)}>
					</input>
				</td>
				<td><input type="number" name="estimated"
						value={ this.state.new.estimated }
						onChange={e => this.saveNewText(e.target.value, e.target.name)}>
					</input>
				</td>
				<td><input type="number" name="realized"
						value={ this.state.new.realized }
						onChange={e => this.saveNewText(e.target.value, e.target.name)}>
					</input>
				</td>
			</tr>
		);
	}
}