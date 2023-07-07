import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditProd() {
  const navigate = useNavigate();
  const goBack = () => {
		navigate(-1);
	}
    const [id,setId]=useState();
    const [type,setType]=useState();
    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const [img,setImage]=useState();

    const params=useParams();
    const displayData=async()=>{
        const body={
          id:params.id
        }
        const result=await axios.post('http://localhost:8000/viewProduct',body)
        setType(result.data.message[0].typeName);
        setName(result.data.message[0].productName);
        setPrice(result.data.message[0].price);
        setImage(result.data.message[0].image);
        
      }

      const updateProd=async(e)=>{
        e.preventDefault()
        const body={
            id:params.id,
            name,type,price,img
        }

        const result=await axios.post('http://localhost:8000/editProduct',body)
        alert(result.data.message)
      }
      useEffect(()=>{
        displayData()
      },[])
  return (
    <div >
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
        <h1 className="text-danger">Edit Product
            </h1>
            <Row className='container'>
                <Col lg={6}>
                <img className='ms-5 mt-5' src={img} alt="" width="200" /><br />
                <h6 className='ms-5'>Product: {name}</h6>
                </Col>
                <Col lg={6}>
                
                <form className='mt-5'>
            
            <select className="form-select" aria-label="Default select example" onChange={(e)=>setType(e.target.value)} value={type}>
                <option selected>Select Type</option>
                <option value="Crochet Hook">Crochet Hook</option>
                <option value="Knitting Needles">Knitting Needles</option>
                <option value="Yarn">Yarn</option>
            </select>
               <br />             
            <input
            type="text"
            className="form-control "  placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name}
            id="type"
            name="typeName"

            />
            <br />
            <input
            type="text"
            className="form-control "  placeholder="Price" onChange={(e)=>setPrice(e.target.value)} value={price}
            id="price"
            name="priceName"

            />
            <br />
            <input
            type="text"
            className="form-control "  placeholder="Image URL" onChange={(e)=>setImage(e.target.value)} value={img}
            id="imageID"
            name="imageName"

            />
            <br />
        <button type="submit" className="btn btn-success" onClick={(e)=>updateProd(e)}>Edit Product</button>
        <br />
        <br />
        </form>
                </Col>
            </Row>
           
            
            
    </div>
  )
}

export default EditProd