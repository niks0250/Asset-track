import React from "react";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LeafletMap from './lmap'
import Records from "./history";
import ReactDOM from 'react-dom'
import Axios from "axios";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
let myInterval,map;
let arr=[[51.5,-0.09],[51.5,-0.089],[51.5,-0.088],[51.4995,-0.087],[51.4992,-0.086],[51.4990,-0.085],[51.4987,-0.084],[51.4985,-0.083]];//[31.3260,75.5762],[30.9010,75.8573]];
let i=0,pgid;
let lati=arr[0][0],longi=arr[0][1],key=0;
let coords={lati:0,long:0,key:0,},setCoords;
async function update()
{
    if(i==arr.length)
    {    return;    }
    lati=arr[i][0];
    longi=arr[i][1];
    Axios.post('http://localhost:5000/insertLocation',{
        lati:lati,
        long:longi,
        key:pgid,
    });
    await sleep(1000);
    Axios.get('http://localhost:5000/getLiveLocation?key='+pgid).then((response)=>{

        setCoords(response.data);
    })
    //console.log(i);
    i=i+1;
    // setCoords([lati,longi]);

    
}


let ViewPg=()=>{
    let obj=useParams();
    pgid=obj.pgid;
    const [pglist,setpglist]=useState([]);
    [coords,setCoords] = useState({lati:0,long:0,key:0,});

    useEffect(()=>{
        Axios.get("http://localhost:5000/read").then((response)=>{
            setpglist(response.data);
            //console.log(pglist);
        });
        
        myInterval=setInterval(update,5000);
        

    return()=>{
        i=0;
        clearInterval(myInterval);
    }
        
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
                            <LeafletMap key={key} lat={coords.lati} long={coords.long}/>

                        </div>
                        <div className="col-md-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action fw-bold"> Name : 
                                <span className="fw-normal">{" "+val.pname}</span></li>
                                <li className="list-group-item list-group-item-action fw-bold">Driver : 
                                <span className="fw-normal">{" "+val.paddress}</span></li>
                                <li className="list-group-item list-group-item-action fw-bold">Latitude : 
                                <span className="fw-normal">{" "+coords.lati}</span></li>
                                <li className="list-group-item list-group-item-action fw-bold">Longitude : 
                                <span className="fw-normal">{" "+coords.long}</span></li>
                                <li className="list-group-item list-group-item-action fw-bold">Speed : 
                                <span className="fw-normal">{" "+val.oemail}</span></li>
                                <li className="list-group-item list-group-item-action fw-bold">Contact : 
                                <span className="fw-normal">{" "+val.ocontact}</span></li>
                                <div className="col">
                                    <Link to="/pg/list" className="btn btn-outline-primary mt-3">Home</Link>
                                </div>
                            </ul>

                            <Records id={key}/>
                            
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