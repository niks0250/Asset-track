import React, { useContext } from 'react'
import axios from "axios"
import AuthContext from '../../context/AuthContext';
import {useNavigate} from "react-router-dom";

export default function Logout() {
    const {func} = useContext(AuthContext);
    const navigate = useNavigate();
    async function logout(){
        await axios.get("http://localhost:5000/auth/logout");
        await func();
        navigate("/");
    }
  return (
    <button onClick = {logout}>Logout</button>
  )
}
