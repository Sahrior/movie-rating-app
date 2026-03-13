import React from 'react'
import { useMovieContext } from '../contexts/MovieContexts'
import MovieCard from '../components/MovieCard'
import "../css/Favorites.css"

const Favorites = () => {

  const {favorites} = useMovieContext();

  if(favorites.length > 0){
    return <div className='favorites' >
      <h2>Your Favorites</h2>
      <div className='movies_grid' >
            {favorites.map(movie => (

                //Conditional rendering 



                /*movie.tittle.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                )*/


                <MovieCard movie={movie} key={movie.id} />


                
            ) )}
        </div>
    </div>
  }

  return (
    <div className='favorites_empty' >

        <h2>No favorite movies yet</h2>
        <p>Start addidng movies to your favorite and they will appear here !</p>
      
    </div>
  )
}

export default Favorites
