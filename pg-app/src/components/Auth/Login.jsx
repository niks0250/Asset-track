import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {func} = useContext(AuthContext);
  const navigate = useNavigate();
  async function submitfunc(e){
    try{
    e.preventDefault();
    const formData={
        email,password
    }
    await axios.post("http://localhost:5000/auth/login",formData);
    await func();
    navigate("/");
    }catch(error){
        console.log(error);
    }}
  return (
    <>
      <div>Login Form</div>
      <form onSubmit={submitfunc}>
        <input
          type="email"
          value={email}
          placeholder="Enter the email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
         <input
          type="password"
          value={password}
          placeholder="Enter the password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button type="submit">
            Login
        </button>
      </form>
    </>
  );
}
