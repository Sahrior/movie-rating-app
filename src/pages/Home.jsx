import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'
import "../css/Home.css"

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {
            id : 1,
            tittle: "john wick",
            release_date:  "2020"
        },
        {
            id : 2,
            tittle: "terminator 2",
            release_date:  "2022"
        },
        {
            id : 3,
            tittle: "epstein file 3",
            release_date:  "2024"
        }
    ]


    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }


  return (
    <div className='home' >

        <form onSubmit={handleSearch} className='search_form' >

            <input 
                type="text" 
                placeholder='search for movies...' 
                className='search_input' 
                value={searchQuery}
                onChange={ (e) => setSearchQuery(e.target.value) }
            />

            <button type='submit' className='search_button' >
                Search
            </button>

        </form>
        
        <div className='movies_grid' >
            {movies.map(movie => (

                //Conditional rendering 

                /*movie.tittle.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                )*/


                <MovieCard movie={movie} key={movie.id} />


                
            ) )}
        </div>

    </div>
  )
}

export default Home
