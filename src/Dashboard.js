import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Dashboard() {

  const [products,setProducts]=useState()
   const [email,setEmail]=useState()
  const viewProds=async ()=>{
    const result=await axios.get('http://localhost:8000/viewProducts')
    console.log("result",result);
    setProducts(result.data.message);
  }
  const params=useParams();
  // setEmail(params.email);
  const addToCart=async(pid,pimage,pname,pprice)=>{
    const body={
      em:params.email,
      pid:pid,
      pimage:pimage,
      pname:pname,
      pprice:pprice
    }
   console.log("BODY",body);
    const result=await axios.post('http://localhost:8000/addToCart',body)
    console.log(result);
    alert("Added to Cart")
  }
 

  useEffect(()=>
  {
    viewProds()
    setEmail(params.email);
  },[])
  return (
    <div>
      {email==null?(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="links ms-5" to={`/login`}>Login</Link>
              
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      ):""}
      {email?(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="/login">Logout</Nav.Link> */}
              
              <Link className="links " to={`/myCart/${email}`}>My Cart</Link>
              <Link className="links ms-5" to={`/login`}>Logout</Link>
              
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      ):""}
      
    <Row className='ms-5 mb-5 p-2'>
    {
      
      products?(
        products.map(prod=>(
          <Col id="c1" className="p-2" lg={4} md={6} >
          <Card style={{ width: '18rem' }} className='mt-5 ms-5'>
          <Card.Img variant="top" src={prod.image} />
          <Card.Body>
            <Card.Title>{prod.productName}</Card.Title>
            <Card.Text>
              <strong>Price: </strong>Rs. {prod.price}/-
            </Card.Text>
            {email?(<Button variant="primary" onClick={()=>addToCart(`${prod.id}`,`${prod.image}`,`${prod.productName}`,`${prod.price}`)}>Add to Cart</Button>):""}
          </Card.Body>
        </Card>
       </Col>
        ))
      ):""
    
    
    
    
}
    </Row>

    </div>
    
  )
}

export default Dashboard