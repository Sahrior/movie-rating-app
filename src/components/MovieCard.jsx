import React from 'react'

const MovieCard = ({movie}) => {

    function onFavoriteClick(){

    }



  return (
    <div className='movie_card' >

        <div className='movie_poster' >
            <img src={movie.url} alt={movie.tittle} />
            <div className='movie_overlay' >
                <button className='favorite_btn'  onClick={onFavoriteClick}  >
                    {"\u{1F90D}"}
                </button>
            </div>
        </div>

        <div className='movie_info' >
            <h3>{movie.tittle}</h3>
            <p> {movie.release_date} </p>
        </div>
      
    </div>
  )
}

export default MovieCard
