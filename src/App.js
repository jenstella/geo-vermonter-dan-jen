import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar'
import DirButtons from './components/DirButtons'
import PlayButtons from './components/PlayButtons'
import Map from './components/Map'
import Info from './components/Info'
import Score from './components/Score'
import LocGen from './components/LocGen'
import borderData from "../data/border";
import L from "leaflet"
import leafletPip from "leaflet-pip"

let minLat = 42.730315121762715
let maxLat = 45.007561302382754
let minLong = -71.51022535353107
let maxLong = -73.42613118833583

function App(props) {

  const [center, setCenter] = useState([43.88, -72.7317])

  //Generates Random Number
  function randomSpot(min, max) {
    return Math.random() * (max - min) + min;
  }

  //Sets Random Number to Variable
  let randomLat = randomSpot(minLat, maxLat)
  let randomLon = randomSpot(minLong, maxLong)

  //Sets the border data for use in the leaflet pip manipulation
  let gjLayer = L.geoJSON(borderData)
  
  //returns an array. if length is 0, not in VT, goes again. if length is 1, it is in VT
  setCenter(leafletPip.pointInLayer([-72.7317 , 43.88], gjLayer)); 
  console.log(center)
  

  return (
    <div>
      <NavBar />
      <Map center={center} />
      <PlayButtons setCenter={setCenter}/>
      <DirButtons />
      <Info />
      <Score />
    </div>
  );
}

export default App;
