/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Spinner from '../utilities/Spinner'

import { Link } from 'react-router-dom'

// import Params
import { useParams } from 'react-router-dom'

// import Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'


const MovieShow = () => {

  const { id } = useParams()

  const [movie, setMovie] = useState(null)

  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
        setMovie(data)
      } catch (error) {
        setErrors(true)
      }
    }
    getMovie()
  }, [id])

  return (
    <>
      <Container className="mt-5">
        <Row>
          {/* const {id, title, original_title, image} = movie */}
          {movie ?
            <>
              <Col md="6" className="movie mb-2">
                <Card className="shadow-sm">
                  <Card.Img src={movie.image} />
                </Card>
              </Col>
              <Col md="6" className="movie mb-2">
                <Card className="shadow-sm">
                  <Card.Body className="bg-light">
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Subtitle className="text-muted">{movie.original_title} ({movie.original_title_romanised})</Card.Subtitle>
                    <hr />
                    <Card.Text><Badge pill bg="info">Directed by:</Badge> {movie.director}</Card.Text>
                    <hr />
                    <Card.Text><Badge pill bg="info">Released:</Badge> {movie.release_date}</Card.Text>
                    <hr />
                    <Card.Text><Badge pill bg="info" className="mb-2">Description:</Badge><br /> {movie.description}</Card.Text>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
            :
            <h2 className="text-center">
              {errors ? 'Something went wrong!' : <Spinner />}
            </h2>
          }
        </Row>
      </Container>
    </>
  )
}

export default MovieShow