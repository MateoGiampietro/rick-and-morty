import './App.css';
import Detail from './components/Detail/Detail.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Form from './components/Form/Form.jsx'
import Favorites from './components/Favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';

function App() {

   const [ characters, setCharacters ] = useState([]);
   const location = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const dispatch = useDispatch();

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`);

         if (data.access) {
            setAccess(data.access);
            navigate("/home");
         } else {
            alert("Datos incorrectos.");
         }
         
      } catch (error) {
         alert(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id) {
      try {
         const charId = characters.filter(char => char.id === Number(id));

         if (charId.length) {
            return alert(`${charId[0].name} ya existe!`);
         }
         
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         if (data.name) {
            setCharacters([...characters, data]);
            navigate("/home");
         } else {
            alert("El id debe ser un numero entre 1 y 826");
         }

      } catch (error) {
         alert("¡El id debe ser un número entre 1 y 826!");
      }
   }

   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== Number(id)))
      dispatch(removeFav(id))
   }

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/about' element={<About />}/>
            <Route path='/home' element={<Home characters={characters} onSearch={onSearch} onClose={onClose}/>}/>
            <Route path='/detail/:id' element={<Detail characters={characters} onSearch={onSearch} onClose={onClose}/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
         </Routes>
      </div>
   );
}

export default App;
