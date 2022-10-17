// storeContext contains our data from data.json
import React, { useState, createContext, useEffect } from 'react'

export const AudioContext = createContext()

const AudioContextProvider = ({ children }) => {
  // the array of data to hold the json data provided, data here as an array is empty.
  const [data, setData] = useState([])

  //get json data using the fetch api. this fetch api gets the data stored in our json file and stores it in the variable data as declared above.
  // async-await=> async function makes sure that a promise is returned. await is a keyword that makes the code wait until the promise returns a result.
  //   const fetchPackages = async () => {
  //     try {
  //       const response = await fetch(`/data.json`)
  //       const products = await response.json()
  //       // console.log(products)
  //       setData(products)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  // access data once, when the component (App) renders
  //   useEffect(() => {
  //     fetchPackages()
  //   }, [])

  return (
    <AudioContext.Provider value={{ data }}>
      {children}
    </AudioContext.Provider>
  )
}

export default AudioContextProvider
