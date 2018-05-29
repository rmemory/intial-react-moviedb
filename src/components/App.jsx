import React, { Component } from 'react';

import Logo from './logo.svg';
import css from './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Logo width={150} height={150}/>
					{/* <img src="{logo}" alt="logo"/> */}
				</header>
			</div>
		)
	}
}

export default App;