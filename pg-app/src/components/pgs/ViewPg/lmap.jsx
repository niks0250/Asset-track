import React, { useEffect ,useState} from "react";
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;


L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

let myInterval,map;
let arr=[[51.5,-0.09],[51.5,-0.089],[51.5,-0.088]];
let i=0;

let marker;
function newMarker()
{
    let lati=arr[i][0];
    let longi = arr[i][1]; 
    console.log(i);
    if(marker)
    {
      map.removeLayer(marker)
    }
    marker=L.marker([lati,longi]).addTo(map);
    map.setView([lati,longi],16);
    if(i==arr.length-1)
    {
      i=0;
    }
    else
    {
      i=i+1;
    }
}
function LeafletMap() {

    const [coords,setCoords] = useState([0,0]);


  useEffect(() => {
    var container = L.DomUtil.get("map");

    if (container != null) {
    container._leaflet_id = null;
    }
    mapp();

    return()=>{
      clearInterval(myInterval);
  map.eachLayer(function (layer) {
    map.removeLayer(layer);
    });
    }


  }, []);

  const mapp = () => {

    // The <div id="map"> must be added to the dom before calling L.map('map')
    map = new L.map('map');
    map.eachLayer(function (layer) {
      map.removeLayer(layer);
      });
    map.setView([51.5,-0.09],13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    myInterval=setInterval(newMarker,3000);
  };

  return <div id="map" ></div>;
}




export default LeafletMap;
