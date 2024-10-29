import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from '../../Components/Loader'


function CharacComparator() {
    const [characs, setCharacs] = useState()

    const fetchData = async () => {
        try {
            const firstCharacResponse = await fetch('http://localhost:3000/1')
            const secondCharacResponse = await fetch('http://localhost:3000/9')

            if (!firstCharacResponse || !secondCharacResponse) {
                throw new Error(`Response status : ${firstCharacResponse.status && secondCharacResponse.status}`)
            }

            const firstCharacResponseToJson = await firstCharacResponse.json()
            const secondCharacResponseToJson = await secondCharacResponse.json()

            setCharacs([...firstCharacResponseToJson, ...secondCharacResponseToJson])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return !characs ? <Loader /> : (
        <div className='comparatorContainer'>
            <div className="leftSide">
                <span> Name : {characs[0].name}</span>
                <span style={{ color: parseInt(characs[0].height) > parseInt(characs[0].height) ? "green" : "red" }}>Height : {characs[0].height}</span>
                <span style={{ color: parseInt(characs[0].mass) > parseInt(characs[0].mass) ? "green" : "red" }}>Mass : {characs[0].mass}</span>
            </div>

            <div className="rightSide">
                <span>Name : {characs[1].name}</span>
                <span style={{ color: parseInt(characs[1].height) > parseInt(characs[0].height) ? "green" : "red" }}>Height : {characs[1].height}</span>
                <span style={{ color: parseInt(characs[1].height) > parseInt(characs[0].height) ? "green" : "red" }}>Mass : {characs[1].mass}</span>
            </div>
        </div>
    )
}

export default CharacComparator