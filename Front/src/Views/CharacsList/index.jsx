import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from '../../Components/Loader'


function CharacList() {

    const [data, setData] = useState()

    const fetchData = async (url) => {
        try {
            const response = await fetch(url)

            if (!response) {
                throw new Error(`Response status : ${response.status}`)
            }

            const responseToJson = await response.json()

            setData(responseToJson)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData('http://localhost:3000')
    }, [])

    return !data ? <Loader /> : (
        <ul>
            {data.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </ul>
    )
}

export default CharacList