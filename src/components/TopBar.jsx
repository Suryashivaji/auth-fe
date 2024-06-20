import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import{useLogout}  from '../hooks/UseLogout'

function TopBar() {

    let location = useLocation()
    let logout = useLogout()
    const TabName = {
      "/admin":"Admin Dashboard",
      "/user":"User Dashboard"
    }

  return<>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Nav className="me-auto" >
        <Nav.Link onClick={logout}>Home</Nav.Link>
     </Nav>
     <Container>
        <Navbar.Brand >{TabName[location.pathname]}</Navbar.Brand>
      </Container>
      <Button variant="primary" href='/'>SignIn</Button>
      <Button variant="danger" onClick={logout}>Logout</Button>
    </Navbar>
  </>
}

export default TopBar
