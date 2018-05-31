import React, { Component } from 'react';
import axios from 'axios';

import Logo from './logo.svg';
import css from './App.css';

import Movie from './Movie.jsx';

class App extends Component {
	state = {
		movies: [],
		err: false,
		errMsg: ''
	}

	// While we are waiting for the data, we could in theory show a loading
	// component.
	async componentDidMount() {
		try {
			const res = await axios
				.get('https://api.themoviedb.org/3/discover/movie?api_key=beedcb83bd5d4ba6abe85259edcf13b9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
			if (res && res.data && res.data.results) {
				this.setState({
					err: false,
					movies: res.data.results
				});
			} else {
				this.setState({
					movies: [],
					err: true,
					errMsg: 'Invalid movie data'
				})
			}
		} catch (e) {
			this.setState({
					movies: [],
					err: true,
					errMsg: `Invalid movie data: ${e.name}: ${e.message}`
			})
		}
	}

	render() {
		const {err, errMsg, movies} = this.state;
		let message;

		if (!err) {
			message = 'Loading movies ...'
		} else {
			message = errMsg;
		}

		return (
			<div className="App">
				<header className="App-header">
					<Logo width={150}/>
				</header>
				<div className="body">
				{ (() => {
						if(movies.length > 0) {
							return movies.map((movie) => {
								return (
									<Movie key={movie.id} movie={movie} overview={movie.overview}/>
								)
							})
						} else {
							return <p>{message}</p>
						}
					})()
				}

				</div>
			</div>
		)
	}
}

export default App;