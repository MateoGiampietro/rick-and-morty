import './App.css';
import Detail from './components/Detail/Detail.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
   const EMAIL = 'test@test.com';
   const PASSWORD = 'pass123';
   const dispatch = useDispatch();

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
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
