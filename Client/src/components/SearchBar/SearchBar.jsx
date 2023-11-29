import { useState } from 'react';
import './SearchBar.css'

export default function SearchBar(props) {

   const [ id, setId ] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   };

   const handleClick = (event) => {
      event.preventDefault();
      props.onSearch(id);
      setId('');
   }

   return (
      <div className='searchBar'>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={handleClick}>Agregar</button>
      </div>
   );
}