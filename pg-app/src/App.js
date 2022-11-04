import React, { Component } from "react";
import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PgList from "./components/pgs/PgList/PgList"
import AddPg from "./components/pgs/AddPg/AddPg";
import ViewPg from "./components/pgs/ViewPg/ViewPg";
import UpdatePg from "./components/pgs/UpdatePg/UpdatePg";
let App=()=> {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path={"/"} element={<Navigate to={"/pg/list"}/>}/>
      <Route path={"/pg/list"} element={<PgList/>}/>
      <Route path={"/pg/add"} element={<AddPg/>}/>
      <Route path={"/pg/update"} element={<UpdatePg/>}/>
      <Route path={"/pg/view/:pgid"} element={<ViewPg/>}/>
    </Routes>
    </>
  );
}

export default App;
