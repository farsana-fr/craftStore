import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [nm, setName] = useState("");
  const [em, setEm] = useState("");
  const [pwd, setPwd] = useState("");
  const [cfmpwd, setcfmPwd] = useState("");

  const nav = useNavigate();


 
  const DoRegister = async (e) => {
    e.preventDefault();
    const body = {
      nm: nm,
      em: em,
      pwd: pwd,
    };
    try {
      if(pwd!=cfmpwd)
      {
        alert(`Passwords doesn't match`)
      }
      else
      {
        const result = await axios.post("http://localhost:8000/register", body);
        console.log(result);
        alert(result.data.message);
        nav("/login");
      }
    } catch (err) {
      // const alertMsg=err.response?(()=>console.log(err.response.data)):"";
      console.log(err.response.data.message);
      alert(err.response.data.message);
    }
  };

  return (
    <div className="container w-50 mt-5">
      <h1 className="text-danger">
        <i className="fa-regular fa-user"></i>&nbsp;USER REGISTRATION FORM
      </h1>
      <form className="">
        <input
          type="text"
          className="form-control "
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          id="nameID"
          name="nameName"
        />
        <br />
        <input
          type="text"
          className="form-control "
          placeholder="Email"
          onChange={(e) => setEm(e.target.value)}
          id="emID"
          name="emIDName"
        />
        <br />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
          id="pwd"
          name="pwdName"
        />
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          onChange={(e)=>setcfmPwd(e.target.value)}
          id="cfmpwd"
          name="cfmpwdName"
        />
        <button
          type="submit"
          className="btn btn-danger"
          onClick={(e) => DoRegister(e)}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
