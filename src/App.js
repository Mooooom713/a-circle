import React from 'react';
import Home from './layouts/home';
import Studio from './layouts/studio';
import Famous from './layouts/famous';
import GaoKao from './layouts/gaokao';
import RouteList from './common/route-list';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="App">
						<Route path={RouteList.mainRoute[4]} exact component={Home} />
						<Route path={RouteList.mainRoute[0]} component={Studio} />
						<Route path={RouteList.mainRoute[1]} component={Famous} />
						<Route path={RouteList.mainRoute[2]} component={GaoKao} />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
