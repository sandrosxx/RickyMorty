import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Residents from './components/Residents'

function App() {
  const [randm, setRandm] = useState({})
  const [location, setLocation] = useState("");

  useEffect(()=>{
    const randomId = Math.floor(Math.random()*126)+1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then(res=>setRandm(res.data));
  }, [])
  console.log(randm)

  const searchLocation = ()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${location}`)
    .then(res=>setRandm(res.data));
  }

  return (
    <div className="App">
      <div className="title"><h1>Rick and Morty Wiki</h1></div>
      <div className="input">
        <input type="text"  value={location}  onChange={(e) => setLocation(e.target.value)}/>
        <div className="btn"><button onClick={searchLocation}>Search</button></div>
      </div>
      <div className="name"><h2>{randm?.name}</h2></div>
      <div className="description">
      
        <div className="type"><h3>Type: {randm?.type}</h3></div>
        <div className="dimension"><h3>Dimension: {randm?.dimension}</h3></div>
        <div className="population"><h3>Population: {randm.residents?.length}</h3></div>
      </div>
      <div className="person">
       
        {randm.residents?.map((residents)=> (
          <Residents url={residents} key={residents}/>
            
      
        ))
        }
       
       </div>
    </div>
  )
}

export default App
