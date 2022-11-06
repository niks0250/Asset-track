import React, { Component, useEffect, useState } from "react";
import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PgList from "./components/pgs/PgList/PgList"
import AddPg from "./components/pgs/AddPg/AddPg";
import ViewPg from "./components/pgs/ViewPg/ViewPg";
import UpdatePg from "./components/pgs/UpdatePg/UpdatePg";
import SignIn from "./components/pgs/SignIn/SignIn";
let App=()=> {
  const [user,setUser]=useState();
  useEffect(()=>{
    const getUser = ()=>{
      fetch("http://localhost:5000/auth/login/success",{
        method:"GET",
        credentials:"include",
        headers:{
          Accept:"application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials":true,
        },
      }).then(response=>{
        if(response.status===200) return response.json();
        throw new Error("Authentication has been failed")
      }).then(resObject=>{
        setUser(resObject.user);
      }).catch(err=>{
        console.log(err);
      });
    };
    getUser();
  },[]);
  console.log(user);
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path={"/"} element={<Navigate to={"/pg/signin"}/>}/>
      <Route path={"/pg/list"} element={<PgList/>}/>
      <Route path={"/pg/signin"} element={ user?<Navigate to={"/pg/list"}/> : <SignIn/>}/>
      <Route path={"/pg/add"} element={user?<AddPg/> : <Navigate to={"/pg/signin"}/>}/>
      <Route path={"/pg/update"} element={ user? <UpdatePg/> : <Navigate to={"/pg/signin"}/>}/>
      <Route path={"/pg/view/:pgid"} element={<ViewPg/>}/>
    </Routes>
    </>
  );
}

export default App;
