import React from "react";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Axios from "axios";
let ViewPg=()=>{
    let {pgid}=useParams();
    const [pglist,setpglist]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:5000/read").then((response)=>{
            setpglist(response.data);
        });
    },[])
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
                            <img src={"/gta map.jpeg"} style={{ width: '28rem',height:"23rem" }}/>
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
        










    {/* <section className="view-pg mt-3">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img src="/pg1.jpg" style={{ width: '28rem',height:"23rem" }}/>
                </div>
                <div className="col-md-7">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-action">Property Name : 
                        <span> Sakshi enclave</span></li>
                        <li className="list-group-item list-group-item-action">Property Address: 
                        <span> 212, Kunj Vihar, Delhi</span></li>
                        <li className="list-group-item list-group-item-action">Property Facilities : 
                        <span> ACs, 1 double-bed,3 cabinates, great view</span></li>
                        <li className="list-group-item list-group-item-action">Owner Name : 
                        <span> Ravi</span></li>
                        <li className="list-group-item list-group-item-action">Owner Email : 
                        <span> ravi27@gmail.com</span></li>
                        <li className="list-group-item list-group-item-action">Owner Contact Number : 
                        <span> 9917291021</span></li>
                        <div className="col">
                            <Link to="/pg/list" className="btn btn-outline-primary mt-3">Home</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </section> */}
    </>
    )
};
export default ViewPg;