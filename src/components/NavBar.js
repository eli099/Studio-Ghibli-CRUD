import React from 'react'

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


// Link for React navigation
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Navbar fixed="top" bg="info" variant="light" expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src="https://ghibliapi.herokuapp.com/images/logo.svg" width="100px" alt="Studio Ghibli"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar