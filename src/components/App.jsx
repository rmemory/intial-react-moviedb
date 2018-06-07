/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {
	BrowserRouter as
	Router, Switch, Route, Link,
} from 'react-router-dom';

import Logo from './logo.svg';
import css from './App.css'; // eslint-disable-line no-unused-vars

import MoviesList from './MoviesList.jsx';
import MovieDetail from './MovieDetail.jsx';

const App = () => (
	<Router>
		<div className="App">
			<header className="App-header">
				<Link to="/">
					<Logo width={150} alt="logo" />
				</Link>
			</header>
			<Switch>
				<Route exact path="/" component={MoviesList} />
				<Route path="/:id" component={MovieDetail} />
			</Switch>
		</div>
	</Router>
);

export default App;

