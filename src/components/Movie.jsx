import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ movie, overview }) => (
	<div>
		<h3>{movie.title}</h3>
		<p>{overview}</p>
	</div>
);

Movie.propTypes = {
	movie: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string.isRequired,
	}).isRequired,
	overview: PropTypes.string,
};

Movie.defaultProps = {
	overview: 'Overview not available',
};

export default Movie;
