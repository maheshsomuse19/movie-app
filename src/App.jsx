import { useEffect, useState } from 'react'
import './App.css'
import { fetchDatafromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'

function App() {

  const dispatch = useDispatch()
  useEffect(()=> {
    apiTesting()
  },[])
  const apiTesting  = () => {
    fetchDatafromApi("/movie/popular")
    .then((res)=> {
      dispatch(getApiConfiguration(res))
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='App'>
      Movie app
    </div>
  )
}

export default App
