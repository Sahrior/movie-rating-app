import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { searchMovies, getPopularMovives } from '../services/api'
import "../css/Home.css"

const Home = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const loadPopularMovies = async()=>{
            
            try{
                const popularMovies = await getPopularMovives()
                setMovies(popularMovies)
            }catch(err){
                console.log(err);
                setError("Failed to load movies")
            }

            finally{
                setLoading(false)
            }

        }

        loadPopularMovies()

    },[])


    const handleSearch = async (e) => {
        e.preventDefault()
        

        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true) 

        try{

            const searchResult = await searchMovies(searchQuery)
            setMovies(searchResult)
            setError(null)

        }catch(err){
            console.log(err)
            setError("Failed to search moives.....")
        }finally{
            setLoading(false)
        }



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
