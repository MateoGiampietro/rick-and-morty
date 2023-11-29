import React from 'react';
import Cards from '../Cards/Cards.jsx';
import './Home.css'

export default function Home({ characters, onSearch, onClose }) {
    return (
        <div>
            <Cards characters={characters} onClose={onClose}/>
        </div>
    )
}