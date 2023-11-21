import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Acceuil() {

    const [pays, setPays] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const getData = async () => {
            const res = await axios.get('https://restcountries.com/v3.1/all')
            return res.data;
        }

        getData().then(pays => setPays(pays))
    }, [])
  return (
    <div className='list'>
        {pays.map(p => 
            <div className='pays'>
                <img src={p.flags.png} alt="" onClick={() => navigate('/details/'+p.name.common)}/>
                <h5>{p.name.official}</h5>
            </div>
            )}
    </div>
  )
}
