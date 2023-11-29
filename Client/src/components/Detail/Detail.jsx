import React from "react"
import { useLocation } from 'react-router-dom'
import './Detail.css'

export default function Detail({ characters }) {
    const location = useLocation();
    const regex = /\d+/;
    const id = location.pathname.match(regex)[0];
    const character = characters.filter((char) => char.id === Number(id));

    return (
        <div className='details-container'>
            <div className='details'>
                <h2>{character[0].name}</h2>
                <h4>{character[0].status}</h4>
                <h4>{character[0].species}</h4>
                <h4>{character[0].gender}</h4>
                <h4>{character[0].origin.name}</h4>
            </div>

            <div className="photo-container">
                <img src={character[0].image} alt={character[0].id}/>
            </div>
        </div>
    )
}