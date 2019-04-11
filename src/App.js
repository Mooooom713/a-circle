import React from 'react';
import Home from './layouts/home';
import Studio from './layouts/studio';
import Famous from './layouts/famous';
import GaoKao from './layouts/gaokao';
import Club from './layouts/club';
import Login from './layouts/login';
import User from './layouts/user';
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
						<Route path={RouteList.mainRoute[6]} exact component={Home} />
						<Route path={RouteList.mainRoute[0]} component={Studio} />
						<Route path={RouteList.mainRoute[1]} component={Famous} />
						<Route path={RouteList.mainRoute[2]} component={GaoKao} />
						<Route path={RouteList.mainRoute[3]} component={Club} />
						<Route path={RouteList.mainRoute[4]} component={Login}/>
						<Route path={RouteList.mainRoute[5]} component={User}/>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
