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

   const handleRandom = () => {
		const randomNumber = Math.floor(Math.random() * 826) + 1;
		props.onSearch(randomNumber);
	};

   return (
      <div className='searchBar'>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={handleClick}>Agregar</button>
         <button onClick={handleRandom}>Random</button>
      </div>
   );
}