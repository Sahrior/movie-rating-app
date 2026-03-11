import React from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {

    const movies = [
        {
            id : 1,
            tittle: "john wick",
            release_date:  "2020"
        },
        {
            id : 2,
            tittle: "john wick 2",
            release_date:  "2022"
        },
        {
            id : 3,
            tittle: "john wick 3",
            release_date:  "2024"
        }
    ]



  return (
    <div className='home' >
        
        <div className='movies_grid' >
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} /> )}
        </div>

    </div>
  )
}

export default Home
