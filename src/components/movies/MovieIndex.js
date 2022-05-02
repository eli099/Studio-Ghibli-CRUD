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

const MovieIndex = () => {

  const [movies, setMovies] = useState([])

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

  return (
    <>
      {/* <Spinner /> */}
      <Container className="movie-list">
        <Row>
          {movies.map((movie) => {
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
    </>
  )
}

export default MovieIndex