import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie /* overview */ }) => (
	<div>
		<Link to={`${movie.id}`}>
			<Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
		</Link>
		{/* <h3>{movie.title}</h3> */}
	</div>
);

Movie.propTypes = {
	movie: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string.isRequired,
	}).isRequired,
	// overview: PropTypes.string,
};

// Movie.defaultProps = {
// 	overview: 'Overview not available',
// };

export default Movie;

export const Poster = styled.img`
	box-shadow: 0 0 35px black;
`;
