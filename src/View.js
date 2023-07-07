import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom'

function View() {

    const params=useParams();
    const nav=useNavigate();
    console.log(params);

    const goBack = () => {
      nav(-1);
    }
    const [det,setDet]=useState()
    const displayData=async()=>{
      // console.log("DATA",data);
      const body={
        id:params.pid
      }
      const result=await axios.post('http://localhost:8000/viewProduct',body)
      setDet(result.data.message[0]);
    }
    console.log("DET",det);
    useEffect(()=>{
        displayData()
    },[])

    const deleteProd=async(id)=>{
        const result=await axios.delete('http://localhost:8000/removeProduct/'+id)
        alert(result.data.message)
        nav('/AdminDashboard')
        
    }
  return (
    
    <div>

<Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            
            <Link className="links ms-5" to={`/login`}>Logout</Link>
              <Link className="links ms-5" onClick={goBack}>Back</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        {det?
        (
            <Row className='container'>
        <Col lg={6} md={6}><img alt="" src={det.image} width="400"></img>
        </Col>
         <Col lg={6} md={6}><strong className="fs-3">{det.productName}</strong>
        <br></br>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, ducimus. Totam sed labore animi! Velit voluptatum reprehenderit minima excepturi perspiciatis. Dolorem sit itaque doloremque quia obcaecati corrupti repudiandae laudantium neque.</p>
        
        <br></br>
        <strong>Item: </strong>{det.typeName}
        <br></br>
        <br></br>
        <strong>Price: </strong>{det.price}
        <br></br>
        <Link to={`/Edit/${det.id}`}><Button className='btn btn-secondary'>Edit</Button></Link>
        <Button className='ms-2 btn btn-danger' onClick={()=>deleteProd(det.id)}>Delete</Button>
        <br></br>
        </Col> 
      </Row>
        ):""}
    </div>
  )
}

export default View