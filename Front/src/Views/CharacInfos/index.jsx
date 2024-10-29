import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from '../../Components/Loader'

function CharacInfos() {

  const [charac, setCharac] = useState()

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/1')

      if (!response) {
        throw new Error(`Response status : ${response.status}`)
      }

      const responseToJson = await response.json()

      setCharac(responseToJson)
      console.log(responseToJson)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return !charac ? <Loader /> : (
    <div className='infosContainer'>
      <span>Name : {charac[0].name}</span>
      <span>Height : {charac[0].height}</span>
      <span>Films : </span>
      <ul>
        {charac[0].films.map((film) => (
          <li>{film.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default CharacInfos