import React from 'react'
import "../css/MovieCard.css"

const MovieCard = ({movie}) => {

    function onFavoriteClick(){

    }



  return (
    <div className='movie_card' >

        <div className='movie_poster' >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.tittle} />
            <div className='movie_overlay' >
                <button className='favorite_btn'  onClick={onFavoriteClick}  >
                    {"\u{1F90D}"}
                </button>
            </div>
        </div>

        <div className='movie_info' >
            <h3>{movie.tittle}</h3>
            <p> {movie.release_date?.split("-")[0]} </p>
        </div>
      
    </div>
  )
}

export default MovieCard
