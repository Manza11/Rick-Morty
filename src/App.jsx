import './App.css'
import rickandmortylogo from './assets/logo.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Location from './components/Location'
import Residentinfo from './components/Residentinfo'
import { Pagination } from './components/Pagination'

function App() {
  const [dataLocation, setDataLocation] = useState({});
  const [ searchbar, setSearchBar ] = useState("")
  const [ page, setPage ] = useState(1)
  const perPage = 4
  const quantyPage = Math.ceil(dataLocation.residents?.length / perPage)
  const fIndex = (page - 1) * perPage
  const residents = dataLocation.residents?.slice(fIndex, fIndex + perPage)

  useEffect(() => {
    let random = Math.floor(Math.random() * 126 ) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setDataLocation(res.data));
  }, []);

  const search = () =>{

    axios
      .get(`https://rickandmortyapi.com/api/location/${searchbar}`)
      .then((res) => setDataLocation(res.data));
    setSearchBar("")
  }

  return (
    <div className="App">
      <header className='header'>
        <img className='logo' src={rickandmortylogo} alt="" />
      </header>
      <input className='input' type="text" value={searchbar} onChange={(e) => setSearchBar(e.target.value)} placeholder="Ingresa un id" />
      <button className='btn_input' onClick={search}>Search</button>
      <Location dataLocation={dataLocation} />
      <Pagination page={page} setPage={setPage} quantyPage={quantyPage} />
      {
        residents?.map((rick) => (
          <Residentinfo url={rick} key={rick} />
        ))
      }
    </div>
  )
}

export default App
