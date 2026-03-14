import React from 'react'
import { useMovieContext } from '../contexts/MovieContexts'
import "../css/MovieCard.css"

const MovieCard = ({movie}) => {


    const {isFavorites, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorites(movie.id)

    function onFavoriteClick(e){
        e.preventDefault()

        if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)

    }



  return (
    <div className='movie_card' >

        <div className='movie_poster' >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.tittle} />
            <div className='movie_overlay' >
                <button className={`favorite_btn ${favorite? "active" : ""}` }  onClick={onFavoriteClick}  >
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
