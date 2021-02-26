function LocGen() {

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

  retu
}

export default LocGen