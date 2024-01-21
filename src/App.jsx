import { useEffect, useState } from 'react'
import  { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Home from './pages/home/Home'
import MovieDetail from './pages/moviedetail/MovieDetail'
import SearchResult from './pages/searchresult/SearchResult'
import Explore from './pages/explore/Explore'
import PageNotFound from './pages/404/PageNotFound'
import { fetchDataFromApi } from './utils/api'
import { getApiConfiguration } from './store/homeSlice'

function App() {

  const { url } = useSelector((state) => state?.homeReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchApiConfig()
  })

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
    .then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url))
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:mediaType/:id' element={<MovieDetail/>}/>
        <Route path='/search/:query' element={<SearchResult/>}/>
        <Route path='/explore/:mediaType' element={<Explore/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
