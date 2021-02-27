import borderData from "../data/border";
import L, { MapContainer, useMapEvent } from "leaflet";
import leafletPip from "leaflet-pip";
import PlayButtons from "./PlayButtons";
import { useState } from "react";

function LocationGenerator(props) {
  // const [randomPosition, setRandomPosition] = useState()

  // const map = useMap()

  let minLat = 42.730315121762715;
  let maxLat = 45.007561302382754;
  let minLong = -71.51022535353107;
  let maxLong = -73.42613118833583;

  //Generates Random Number
  function randomSpot(min, max) {
    return Math.random() * (max - min) + min;
  }

  //Sets the border data for use in the leaflet pip manipulation
  let gjLayer = L.geoJSON(borderData);

  //this needs to live outside the function for it to be used!!
  let randomLat = randomSpot(minLat, maxLat);
  let randomLong = randomSpot(minLong, maxLong);

  //Create Consistent Randomized Location Variable
  function SetRandomPosition() {

    //Returns an array. if length is 0, not in VT, goes again. if length is 1, it is in VT
    let inBounds = leafletPip.pointInLayer([randomLong, randomLat], gjLayer);

    //If In VT Change the Zoom and View
    if (inBounds.length === 1) {
    //   const map = UseMapEvent("click", () => {
    //     map.setView([randomLat, randomLong], 18);
    //   });
    //   return null;
    // } else {
      //if not in VT loop over until it equals 1
      while (inBounds.length === 0) {
        randomLat = randomSpot(minLat, maxLat);
        randomLong = randomSpot(minLong, maxLong);
        inBounds = leafletPip.pointInLayer([randomLong, randomLat], gjLayer);

        //If In VT Change the Zoom and View
        // if (inBounds.length === 1) {
        //   const map = UseMapEvent("click", () => {
        //     map.setView([randomLat, randomLong], 18);
        //   });
        //   return null;
        // }
      }
    }
  }

  return (
    <MapContainer view={[randomLat, randomLong]} zoom={18}>
      <PlayButtons />
    </MapContainer>
  );
}

export default LocationGenerator;
