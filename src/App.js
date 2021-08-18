import React from 'react';
import Header from './components/NavBar';
import Home from './components/Home';
import Users from './components/Users';
import Footer from './components/Footer';
import EditUser from './components/crud/EditUser';
import NewUser from './components/crud/NewUser';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/users" component={Users} />
				<Route exact path="/users/new" component={NewUser} />
				<Route exact path="/users/edit/:id" component={EditUser} />
			</Switch>

			<Footer />
		</Router>
	);
}

export default App;
