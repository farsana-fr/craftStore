import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyCart() {
  const navigate = useNavigate();
  const goBack = () => {
		navigate(-1);
	}
    const params=useParams();
    
    const [items,setItems]=useState([])
    const myCart=async ()=>{
        const body={
            em:params.email
        }
        try{
            console.log(params);
            const result=await axios.post('http://localhost:8000/myOrder',body)
            console.log(result.data.message);
            setItems(result.data.message);
            console.log("items",items);
        }catch(err)
        {
            console.log("Error");
        }
      }
      console.log("items",items);

      const cancelOrder=async(e,id)=>{
      
        const body={
          em:params.email,
          pid:id
        }
        const result=await axios.post('http://localhost:8000/cancelOrder/',body)
        alert(result.data.message)
        myCart()
      }

    useEffect(()=>{
        myCart()
       
    },[])
  return (
    <div>
       
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link style={{"text-decoration":"none"}} className="links ms-5" to={`/myCart/${params.email}`}>My Cart</Link>
              <Nav.Link href="/login">Logout</Nav.Link>
              <Nav.Link onClick={goBack}>Back</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <h1>MY ORDERS</h1>
      <Row>
      
    {items?(
       
      items.map(e=>(
    
          <Col id="c1" className="p-2 container" lg={4} md={6} >

          <Card style={{ width: '18rem' }} className='mt-5 ms-5'>
          <Card.Img variant="top" src={e.pimage} />
          <Card.Body>
          <Card.Title>{e.pname}</Card.Title>
            <Card.Text>
              <strong>Id: </strong>{e.pid}
              <br></br>
              <strong>Price: </strong>Rs. {e.pprice}/-
            </Card.Text>
            <Button onClick={()=>cancelOrder(`${e.pid}`)}>Cancel</Button>
          </Card.Body>
        </Card>
       </Col>
       
      )
      )
    ):""

    }
</Row> 




    </div>
    
  )
  
}

export default MyCart