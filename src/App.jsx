import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/homepage/Home'
import Navbar from './pages/Navbar'
import AnimeDetails from './pages/details/AnimeDetails'
import CharacterDetails from './pages/details/CharacterDetails'
import axios from 'axios'
import SearchPage from './pages/SearchPage'

function App() {
  const [count, setCount] = useState(0)

  axios.defaults.baseURL = "https://api.jikan.moe/v4"

  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/animeDetails/:animeId' element={<AnimeDetails />} />
          <Route path='/characterDetails/:characterId' element={<CharacterDetails />} />
          <Route path='/searchPage/:search' element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
