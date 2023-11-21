import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsCountry() {

    const {name} = useParams()
    const [pays, setPays] = useState()

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get('https://restcountries.com/v3.1/name/'+name)
            return res.data;
        }

        getData().then(pays => setPays(pays[0]))
    }, [name])
  return (
    <div>{
        pays && <div>
            <img src={pays.flags.png} alt="" />
            <h1>{pays.name.official}</h1>
            <h1>{pays.population}</h1>
        </div>
        }</div>
  )
}
