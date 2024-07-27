import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { fetchDataFromApi } from "./utils/Api"
import { useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Error404 from './pages/404/Error404'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import Home from './pages/home/Home'
import SearchResult from './pages/searchResult/SearchResult'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig()
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        
        const url = {
          backdrop:res.images.secure_base_url + "original",
          poster:res.images.secure_base_url + "original",
          profile:res.images.secure_base_url + "original"
        }

        dispatch(getApiConfiguration(url))
      })
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/:mediaType/:id' element={<Details />} />
          <Route path='/search/:query' element={<SearchResult />} />
          <Route path='/explore/:mediaType' element={<Explore />} />
          <Route path='*' element={<Error404 />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
