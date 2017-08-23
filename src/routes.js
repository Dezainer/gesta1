import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

//Pages
import Sheet from 'sheet/sheet';
import Balance from 'balance/balance';

//Style
import 'sheet/sheetStyle';
import 'months/monthsStyle';
import 'balance/balanceStyle';
import 'table/tableStyle';
import 'overall/overallStyle';

render((
	<Router history={ browserHistory }>
		<Route path="/">
			<IndexRedirect to="/planilha/JAN/receitas" />
			<Route path="planilha" component={ Sheet }>
				<Route path=":month/:type">
					<IndexRoute component={ Balance }/>
				</Route>
			</Route>
		</Route>
	</Router>
), document.getElementById('main'))