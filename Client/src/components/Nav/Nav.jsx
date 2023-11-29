import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import './Nav.css'

export default function Nav(props) {
    return (
        <div className='nav'>
            <header></header>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <Link to='/favorites'>
                <button>Favorites</button>
            </Link>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}