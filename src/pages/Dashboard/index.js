import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function Dashboard() {
  
    const location = useLocation()
    const [fullHash] = location.hash.split('&')
    const accessToken = fullHash.split("=")

  useEffect(()=>{
    fetchData()
  })

  async function fetchData() {
    const data = await fetch("https://api.spotify.com/v1/me", {
      headers : {
        'Authorization': 'Bearer ' + `${accessToken[1]}`
      }
    })
    const getData = await data.json()
    console.log(getData)
  } 

  return(
    <div>
      HOLI
    </div>
  )
}

export default Dashboard