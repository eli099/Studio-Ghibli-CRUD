import React from 'react'

// import Link, instead of using <a> tags
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
    <>
      <div className='hero'>
        <Card className="hero-container text-center shadow-sm">
          <Card.Header className="display-3">🌱 Ghibli Movies</Card.Header>
          <Card.Body>
            <Card.Text className='lead text'>Studio Ghibli movie catalog.</Card.Text>
            <Button as={Link} to="/movies" className='btn btn-info'>Explore The Collection</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Home