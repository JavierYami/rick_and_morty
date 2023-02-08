import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Form from './components/Form/Form'
import { useLocation } from 'react-router-dom'

function App () {

const [characters, setCharacters] = useState([])

const location = useLocation();

const onSearch = (character) => {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
  .then((response) => response.json())
  .then((data) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        window.alert('No hay personajes con ese ID');
     }
  });
}

const onClose = (id) => {
  setCharacters(
    characters.filter(character=> character.id!==id),
    )
}

  return (
    <div className='App'>
          {location.pathname === '/' ? <Form/> : <Nav onSearch={onSearch}></Nav>}
        <Routes>
          <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='detail/:detailId' element={<Detail />}/>
          <Route path=':error' element={<Error/>}/>
        </Routes>
    </div>
  )
}

export default App
