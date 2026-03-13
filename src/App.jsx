import React from 'react'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContexts'
import "./css/App.css";

const App = () => {

   



  return (

    <MovieProvider>

      <NavBar/>

      <main className='main_content' >
          <Routes>

              <Route path='/' element = {<Home/>} />
              <Route path='/favorites' element = {<Favorites/>} />

          </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
