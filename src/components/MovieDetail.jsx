/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

import { Poster } from './Movie.jsx';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
	state = {
		movie: {},
		err: false,
		errMsg: '',
	};

	// While we are waiting for the data, we could in theory show a loading
	// component.
	async componentDidMount() {
		try {
			const res = await axios
				.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=beedcb83bd5d4ba6abe85259edcf13b9&language=en-US`);
			if (res && res.data) {
				this.setState({
					err: false,
					movie: res.data,
				});
			} else {
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					movie: {},
					err: true,
					errMsg: 'Invalid movie data',
				});
			}
		} catch (e) {
			this.setState({ // eslint-disable-line react/no-did-mount-set-state
				movie: {},
				err: true,
				errMsg: `Invalid movie data: ${e.name}: ${e.message}`,
			});
		}
	}

	render() {
		const { err, errMsg, movie } = this.state;
		let message;

		if (!err) {
			message = 'Loading movie...';
		} else {
			message = errMsg;
		}

		return (
			<div>
				{/* Conditional alternatives */}
				{/* { (A)
					movie ? (<h1>Hello</h1>) : (<h1>Else</h1>)
				} */}
				{/* { (B)
					movie &&
						<h1>Hello</h1>
				} */}
				{
					(() => {
						if (movie) {
							return (
								<MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
									<MovieInfo>
										<Link to="/"> {/* eslint-disable-line */}
											<Overdrive id={movie.id}>
												<Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
											</Overdrive>
										</Link>
										<div>
											<h1 key={movie.id}>{`${movie.title}`}</h1>
											<h3>Release Date: {movie.release_date}</h3>
											<p>{movie.overview}</p>
										</div>
									</MovieInfo>
								</MovieWrapper>
							);
						}
						return <p>{message}</p>;
					})()
				}
			</div>
		);
	}
}

MovieDetail.propTypes = {
	match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default MovieDetail;

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 50vh;
	background-size: cover;
	background: url(${props => props.backdrop}) no-repeat;
`;

const MovieInfo = styled.div`
	background: white;
	text-align: 2rem 10%;
	display: flex;

	> div {
		margin-left: 20px;
	}

	img {
		postion: relative;
		top: -5rem;
	}
`;
