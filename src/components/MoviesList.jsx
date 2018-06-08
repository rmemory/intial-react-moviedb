/* eslint-disable react/no-did-mount-set-state */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Movie from './Movie.jsx';

/* Usage of PureComponent instead of Component means this particular
   component will only update when a "first level" state or prop
   change occurs, in this case the Movies state. Its a performance
   boost, as Component hirearchies otherwise perform a "deep" update
   strategy, and also can use shouldComponentUpdate as well. */
class MoviesList extends PureComponent {
	state = {
		movies: [],
		err: false,
		errMsg: '',
	};

	// While we are waiting for the data, we could in theory show a loading
	// component.
	async componentDidMount() {
		try {
			const res = await axios
				.get('https://api.themoviedb.org/3/discover/movie?api_key=beedcb83bd5d4ba6abe85259edcf13b9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
			if (res && res.data && res.data.results) {
				this.setState({
					err: false,
					movies: res.data.results,
				});
			} else {
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					movies: [],
					err: true,
					errMsg: 'Invalid movie data',
				});
			}
		} catch (e) {
			this.setState({ // eslint-disable-line react/no-did-mount-set-state
				movies: [],
				err: true,
				errMsg: `Invalid movie data: ${e.name}: ${e.message}`,
			});
		}
	}

	render() {
		const { err, errMsg, movies } = this.state;
		let message;

		if (!err) {
			message = 'Loading movies ...';
		} else {
			message = errMsg;
		}

		return (
			<MovieGrid>
				{
					(() => {
						if (movies.length > 0) {
							const myArray = movies.map(movie => (
								<Movie key={movie.id} movie={movie} />
							));
							return myArray;
						}
						return <p>{message}</p>;
					})()
				}
			</MovieGrid>
		);
	}
}

export default MoviesList;

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
	${'' /* display: flex;
	flex-wrap: wrap;
	align-items: space-between;
	justify-content: space-between;

	padding: 50px 50px 50px 50px;
	min-height: 75vh; */}
`;
