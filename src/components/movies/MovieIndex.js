/* eslint-disable camelcase */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// import Spinner
import Spinner from '../utilities/Spinner'

// import Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import FilterSearch from '../utilities/FilterSearch'

const MovieIndex = () => {

  const [movies, setMovies] = useState([])

  const [filteredMovies, setFilteredMovies] = useState([])

  const [directors, setDirectors] = useState([])

  const [filters, setFilters] = useState({
    director: 'All Directors',
    searchTerm: '',
  })

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get('https://ghibliapi.herokuapp.com/films')
        setMovies(data)
        console.log(movies)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  }, [])

  // handle change for filter state
  const handleChange = (e) => {
    console.log(e.target.value)
    setFilters({ ...filters, [e.target.name]: e.target.value })
    console.log('filtered ->', filters)
  }

  // useEffect to create directorial dropdown options
  useEffect(() => {
    const directorList = []
    if (movies.length) {
      movies.forEach(movie => directorList.includes(movie.director) ? '' : directorList.push(movie.director))
      setDirectors(directorList)
    }
  }, [movies])

  // useEffect to filter movies and add them as filteredMovies state
  useEffect(() => {
    if (movies.length) {
      // generate search term with regex
      const regexSearch = new RegExp(filters.searchTerm, 'i')
      console.log(regexSearch)
      // filter through movies and add matching movies to filteredMovies state
      const filtered = movies.filter(movie => {
        return regexSearch.test(movie.title) && (movie.director === filters.director || filters.director === 'All Directors')
      })
      setFilteredMovies(filtered)
    }
  }, [filters, movies])

  return (
    <>
      {!movies.length ? <Spinner /> :
        <Container className="movie-list">
          {/* Filter & Searchbar */}
          <Row className="justify-content-md-center">
            <Col md="8" lg="6" className="mb-4">
              <FilterSearch filters={filters} directors={directors} handleChange={handleChange} />
            </Col>
          </Row>
          {/* The Movies */}
          <Row>
            {(filteredMovies.length ? filteredMovies : movies).map((movie) => {
              // console.log(movie)
              const { id, title, original_title, image } = movie
              return (
                <Col key={id} md="6" lg="4" className="movie mb-4">
                  <Link to={`/movies/${id}`} alt={title}>
                    <Card className="shadow-sm">
                      <Card.Img variant="top" src={image} />
                      <Card.Body className="bg-light">
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="text-muted">{original_title}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </Container>
      }
    </>
  )
}

export default MovieIndex