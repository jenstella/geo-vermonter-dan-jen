import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar'
import DirButtons from './components/DirButtons'
import PlayButtons from './components/PlayButtons'
import Map from './components/Map'
import Info from './components/Info'
import Score from './components/Score'

function App(props) {

  const [center, setCenter] = useState([43.88, -72.7317])

  return (
    <div>
      <NavBar />
      <Map center={center} />
      <PlayButtons />
      <DirButtons />
      <Info />
      <Score />
    </div>
  );
}

export default App;
