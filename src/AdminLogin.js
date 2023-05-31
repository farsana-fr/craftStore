import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const nav=useNavigate();
    const [em,setEm]=useState('')
    const [pwd,setPwd]=useState('')
    const goToDash=()=>{
        if(em=="admin@c.com" && pwd=="1234")
            nav('/AdminDashboard')
        else
            alert("Invalid Credentials Access Denied")

    }
  return (
    <div className='mt-5 mb-5'>
        <div className='container w-50'>
            <h1 className="text-danger">
                <i className="fa-regular fa-user"></i>&nbsp;ADMIN LOGIN
            </h1>
            <form className=''>
            
            <input
        type="text" 
        className="form-control " placeholder='Enter Email' onChange={(e)=>setEm(e.target.value)}
        id="emID"
        name="emIDName"/>
            <br />
            
            <input
            type="password"
            className="form-control "  placeholder="Password" onChange={(e)=>setPwd(e.target.value)}
            id="pwd"
            name="pwdName"

            />
            <br />
        <button type="submit" className="btn btn-danger" onClick={goToDash}>Log In</button>
        </form>
        </div>
    </div>
  )
}

export default AdminLogin