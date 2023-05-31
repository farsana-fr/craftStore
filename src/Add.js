import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid'

function Add() {

    const [id,setId]=useState();
    const [type,setType]=useState();
    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const [img,setImage]=useState();
 

    const addProd=async(e)=>{
        e.preventDefault()
        const body={
            id,type,name,price,img
        }
        // console.log(body);
        const result=await axios.post('http://localhost:8000/addNewProduct',body)
        alert(result.data.message);
    }
    useEffect(()=>{
        setId(uuid().slice(0,3));
      },[])
  return (
    <div className='container'>
        <h1 className="text-danger">Add New Products
            </h1>
            <form className=''>
            <select class="form-select" aria-label="Default select example" onChange={(e)=>setType(e.target.value)}>
                <option selected>Select Type</option>
                <option value="Crochet Hook">Crochet Hook</option>
                <option value="Knitting Needles">Knitting Needles</option>
                <option value="Yarn">Yarn</option>
            </select>
               <br />             
            <input
            type="text"
            className="form-control "  placeholder="Name" onChange={(e)=>setName(e.target.value)}
            id="type"
            name="typeName"

            />
            <br />
            <input
            type="text"
            className="form-control "  placeholder="Price" onChange={(e)=>setPrice(e.target.value)}
            id="price"
            name="priceName"

            />
            <br />
            <input
            type="text"
            className="form-control "  placeholder="Image URL" onChange={(e)=>setImage(e.target.value)}
            id="imageID"
            name="imageName"

            />
            <br />
        <button type="submit" className="btn btn-success" onClick={(e)=>addProd(e)}>Add Product</button>
        <br />
        <br />
        </form>
    </div>
  )
}

export default Add