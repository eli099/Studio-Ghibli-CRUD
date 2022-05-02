import React from 'react'

// Components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom' // for Link components

import axios from 'axios'

// Components
import Home from './components/Home'
import MovieIndex from './components/movies/MovieIndex'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import MovieShow from './components/movies/MovieShow'

const App = () => {

  // console.log('working')

  return (
    <div id="wrapper">
      <BrowserRouter>
        {/* Global Components */}
        <NavBar />
        {/* Route Components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieIndex />} />
          {/* Individual Movie */}
          <Route path="/movies/:id" element={<MovieShow />} />
          {/* Not Found */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App