import React from 'react';
import PropTypes from 'prop-types';

import './Movie.css';
//라우터 추가 예정
//12/4까지 Router 추가
function Movie({ year, title, summary, poster, genres }) {
return (
    <div className="movie">
        <div>
            <img  src={poster} alt={title} title={title}/>
        </div>
        <div className="movie__data">
            <h3 className="movie__title" >{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie_summary">{summary.slice(0, 180)}...</p>
            <ul className="genres">
                {genres.map((genre, index)=> <li key={index} className="genres__genre">{genre}</li>)}
            </ul>
        </div>
    </div>
);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;   