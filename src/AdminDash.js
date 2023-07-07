import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Dashboard() {
  const navigate = useNavigate();
  const goBack = () => {
		navigate(-1);
	}
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
      
  
        
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="/login">Logout</Nav.Link> */}
              {/* <Link className="links " to={`/myCart/${email}`}>My Cart</Link> */}
              <Link className="links ms-5" to={`/login`}>Logout</Link>
              <Link className="links ms-5" onClick={goBack}>Back</Link>
              
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      
      <div className="container p-4 ">
      <Link to={'/Add'}><Button className='btn btn-secondary w-25 p-3 text-center'>Add New Products</Button></Link>
      <Link to={'/Orders'}><Button className='btn btn-secondary w-25 p-3 text-center'>View Customer Orders</Button></Link>
        {/* <div className="row">
          <div className="col-3">
              
                  
                  <a>View All Brands</a>
              
          </div>
          <div className="col-3">
              
                  <a>
                    <img src="https://i.postimg.cc/ncgbFSYD/ganga1.jpg" width="100px" alt="" className="border border-2 rounded-circle"/>
                    <h6 className="ms-5">Ganga</h6>
                  </a>
              
          </div>
          <div className="col-3">
            
              
                  <a>
                    <img src="https://i.postimg.cc/g2zSPv1Z/hs1.jpg" width="100px" alt="" className="border border-2 rounded-circle"/>
                    <h6 className="ms-2">Hobby Store</h6>
                  </a>
          </div>
          <div className="col-3">
              
              
                  <a>
                    <img src="https://i.postimg.cc/MTpqMMcM/nako1.jpgg" width="100px" alt="" className="border border-2 rounded-circle"/>
                    <h6 className="ms-2">Nako</h6> 
                  </a>   
              
          </div>
        </div> */}
    
    </div>
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
              <strong>ID: </strong>{prod.id}
            </Card.Text>
            <Link to={`/View/${prod.id}`}><Button variant="primary">View</Button></Link>
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