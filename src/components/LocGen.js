import borderData from "../data/border";
import L from "leaflet"
import leafletPip from "leaflet-pip"
import PlayButtons from "./PlayButtons";
import { useState } from 'react'
import { MapContainer } from "react-leaflet";

function LocGen(props) {

  const [randomPosition, setRandomPosition] = useState()

  let minLat = 42.730315121762715
  let maxLat = 45.007561302382754
  let minLong = -71.51022535353107
  let maxLong = -73.42613118833583

  //Generates Random Number
  function randomSpot(min, max) {
    return Math.random() * (max - min) + min;
  }

  //Sets Random Number to Variable
  let randomLat = randomSpot(minLat, maxLat)
  let randomLong = randomSpot(minLong, maxLong)

  //Sets the border data for use in the leaflet pip manipulation
  let gjLayer = L.geoJSON(borderData)
  
  //returns an array. if length is 0, not in VT, goes again. if length is 1, it is in VT
  let inBounds = leafletPip.pointInLayer([randomLong, randomLat], gjLayer); 

  //stop the function and change marker and the zoom 
  //while(inBounds.length === 0) {
  // if (inBounds.length === 1) {
  //setRandomPosition(L.marker([randomLong, randomLat]).addTo(map))
  //}
  //else {
  //inBounds = leafletPip.pointInLayer([randomLong, randomLat], gjLayer)
  //} 
  //}
  return (
  <div>
    <PlayButtons setRandomPosition={setRandomPosition}/>
  
    if start button is disabled center = randomPosition, zoom = 18
    <MapContainer center={props.center} zoom={8} scrollWheelZoom={false}>

    </MapContainer>
  </div>

    )
  
}

export default LocGen