import axios from 'axios';
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function Login() {

    const [em,setEm]=useState('')
    const [pwd,setPwd]=useState('')
    const nav=useNavigate();
 
    const LoginTo=async(e)=>{
        e.preventDefault();
        const body={
            em:em,
            pwd:pwd
        }
        
        try
        {
            const result=await axios.post('http://localhost:8000/login',body)
            if(result.data.status)
            {
                localStorage.setItem("email",em)
                nav(`/Dashboard/${em}`)
                

            }
            else
            {
                alert("Invalid")
            }
        }
        catch(err)
        {
            if(err)
            {
                alert("Invalid Credentials")
                // alert(err.response.data.message)
            }
        }
    }
  return (
 
    <div className='mt-5'>
        {/* <Row>
        <Col lg={6} md={6}>
            <img src="https://media.istockphoto.com/vectors/collection-of-brightly-colored-shopping-bags-vector-id165626713?b=1&k=20&m=165626713&s=612x612&w=0&h=82i9tq7BWBB0MmO7PQjul2E1CEYx5gM4X8iJa4nUmqc=" alt="" width="50%" />
        </Col>
        <Col lg={6} md={6}> */}
        <div className='container w-50'>
            <h1 className="text-danger">
                <i className="fa-regular fa-user"></i>&nbsp;LOGIN
            </h1>
            <form className=''>
            
            <input
        type="text" onChange={(e)=>setEm(e.target.value)}
        className="form-control " placeholder='Enter Email'
        id="emID"
        name="emIDName"/>
            <br />
            
            <input
            type="password"
            className="form-control " onChange={(e)=>setPwd(e.target.value)} placeholder="Password"
            id="pwd"
            name="pwdName"

            />
            <br />
        <button type="submit" className="btn btn-danger" onClick={(e)=>LoginTo(e)}>Log In</button>
        <h6 className="mt-3">Don't Have an Account ?</h6><a type="submit" className="btn btn-success" href="register" >Register</a>
        <br /><br />
        <a href="/adminLogin" className="text-dark">Login as Admin</a>
    </form>
    </div>
        {/* </Col>
    </Row> */}
    </div>
  )
}

export default Login