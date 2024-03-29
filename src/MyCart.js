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
            const result=await axios.post('http://localhost:8000/myCart',body)
            console.log(result.data.message);
            setItems(result.data.message);
            console.log("items",items);
        }catch(err)
        {
            console.log("Error");
        }
      }
      console.log("items",items);

      const removeFromCart=async(e,id)=>{
      
        const body={
          em:params.email,
          pid:id
        }
        const result=await axios.post('http://localhost:8000/removeFromCart/',body)
        alert(result.data.message)
        myCart()
      }

      const orderProd=async(pid,pimage,pname,pprice)=>{
        const body={
          em:params.email,
          pid:pid,
          pimage:pimage,
          pname:pname,
          pprice:pprice
        }
       console.log("BODY",body);
        const result=await axios.post('http://localhost:8000/orderProduct',body)
        console.log("RES",result);
        alert("Order Placed")
        navigate(`/myOrder/${params.email}`)
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
              <Nav.Link href="/login">Logout</Nav.Link>
              <Nav.Link onClick={goBack}>Back</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <h1>MY CART</h1>
      <Row>
    {items?(
      items.map(e=>(
        
          <Col id="c1" className="p-2" lg={4} md={6} >
          <Card style={{ width: '18rem' }} className='mt-5 ms-5'>
          <Card.Img variant="top" src={e.pimage} />
          <Card.Body>
          <Card.Title>{e.pname}</Card.Title>
            <Card.Text>
              <strong>Id: </strong>{e.pid}
              <br></br>
              <strong>Price: </strong>Rs. {e.pprice}/-
            </Card.Text>
            <Button onClick={()=>removeFromCart(`${e.pid}`)}>Remove</Button>
            {/* <Button className="btn btn-secondary ms-1" onClick={()=>removeFromCart(`${e.pid}`)}>Proceed to Buy</Button> */}
            <Button className="btn btn-secondary ms-1" onClick={()=>orderProd(`${e.pid}`,`${e.pimage}`,`${e.pname}`,`${e.pprice}`)}>Proceed to Buy</Button>
            {/* <Button variant="primary" onClick={()=>addToCart(`${prod.image}`,`${prod.productName}`,`${prod.price}`)}>Add to Cart</Button> */}
          </Card.Body>
        </Card>
       </Col>
       
      )
      )
    ):"em"

    }
</Row> 




    </div>
    
  )
  
}

export default MyCart