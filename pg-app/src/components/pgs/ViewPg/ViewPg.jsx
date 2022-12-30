import React from "react";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LeafletMap from './lmap'
import ReactDOM from 'react-dom'
import Axios from "axios";

let ViewPg=()=>{
    let {pgid}=useParams();
    const [pglist,setpglist]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:5000/read").then((response)=>{
            setpglist(response.data);
            console.log(pglist);
        });
        
        
    },[]);
    return(
    <>    

    <section className="view-pg-intro p-3">
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h2 text-dark"> View INFO</p>
                    <p className="fst-italic"></p>
                </div>
            </div>
        </div>
    </section>
    <div className="abc">
    {pglist.map((val,key)=>{
                if(key==pgid)
                {
                return(
                // <div className="row-4 mt-5 mb-5">
                <section key={key} className="view-pg mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            {/* <img src={"/gta map.jpeg"} style={{ width: '28rem',height:"23rem" }}/> */}
                            <LeafletMap key={key}/>

                        </div>
                        <div className="col-md-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action fw-bold"> Name : 
                                <span className="fw-normal">{" "+val.pname}</span></li>
                                <li className="list-group-item list-group-item-action fw-bold">Driver : 
                                <span className="fw-normal">{" "+val.paddress}</span></li>
                                <li className="list-group-item list-group-item-action fw-bold">Latitude : 
                                <span className="fw-normal">{" "+val.pfacilities}</span></li>
                                <li className="list-group-item list-group-item-action fw-bold">Longitude : 
                                <span className="fw-normal">{" "+val.oname}</span></li>
                                <li className="list-group-item list-group-item-action fw-bold">Speed : 
                                <span className="fw-normal">{" "+val.oemail}</span></li>
                                <li className="list-group-item list-group-item-action fw-bold">Contact : 
                                <span className="fw-normal">{" "+val.ocontact}</span></li>
                                <div className="col">
                                    <Link to="/pg/list" className="btn btn-outline-primary mt-3">Home</Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
                // </div>
                );
                }
            })};
    </div>
        











    </>
    )
};
export default ViewPg;