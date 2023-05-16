import React,{useContext} from "react";
import {Link} from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Logout from "../Auth/Logout";

let NavBar=()=>{
    const { loggedIn } = useContext(AuthContext);
    return(
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container"> 
        <Link to={"/"} className="navbar-brand text-info">
            Asset <span className="text-primary">Tracking</span>
        </Link>
        {loggedIn == false && (<><Link to="/Register">Register</Link></>)}
      {loggedIn == false && (<><Link to="/Login">Login</Link></>)}
      {loggedIn == true && (<><Logout/></>)}
        </div>
    </nav>
    </>
    )
};
export default NavBar;