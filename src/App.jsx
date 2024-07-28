import { useEffect, useState } from 'react'
import './App.css'
import {fetchDataFromApi} from "./utils/Api"

function App() {
  
  useEffect(() => {
    apiTesting()
  },[])

  const apiTesting = () => {
    fetchDataFromApi("/discover/movie")
    .then((res) => console.log(res))
  }

  return (
    <>
     
    </>
  )
}

export default App
