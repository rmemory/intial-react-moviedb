import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => (
	<div>
		<h3>{props.movie.title}</h3>
		<p>{props.overview}</p>
	</div>
)

Movie.propTypes = {
	movie: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string.isRequired,
	}).isRequired,
	desc: PropTypes.string
}

Movie.defaultProps = {
	overview: 'Overview not available'
}

export default Movie;