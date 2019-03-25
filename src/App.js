import React from 'react';
import Home from './layouts/home';
import Studio from './layouts/studio';
import RouteList from './common/route-list';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Route path={RouteList[4]} exact component={Home} />
					<Route path={RouteList[0]} component={Studio} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
