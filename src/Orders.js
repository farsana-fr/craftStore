import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'


function Orders() {
    const [orders,setOrders]=useState()
    const viewOrder=async()=>{
        const result=await axios.get('http://localhost:8000/processOrder')
        setOrders(result.data.message);
    }
    useEffect(()=>{
        viewOrder()
    },[])
  return (
    <div className='container'>
        {orders?(orders.map(e=>(
            <Row >
            <Col lg={6}>
                <img src={e.pimage} alt="" width="200"/>
                <p><strong>PID: </strong>{e.pid}</p>
                <p><strong>Name: </strong>{e.pname}</p>
            </Col>
            <Col lg={6}>
                <p><strong>State: </strong>{e.state}</p>
                <button className='btn btn-success'>Move to Processing</button>
            </Col>
        </Row>
        ))
             
         ):""
         
         } 
        
        
       
    </div>
  )
}

export default Orders