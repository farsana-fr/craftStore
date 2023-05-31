import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate, useParams } from 'react-router-dom';

function Header() {
  const params=useParams();
console.log("P",params);
console.log("P",params.email);
const nav=useNavigate();
const goBack=()=>{
  nav(-1)
}
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/"  className="links"><Navbar.Brand >craftStore</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button onClick={goBack}>Back</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 

    </div>
  )
}

export default Header