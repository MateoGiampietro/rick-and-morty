import { useState } from 'react';
import Validation from '../Validation/Validation.jsx';

export default function Form({ login }) {

    const [ userData, setUserData ] = useState({
        email:'' ,
        password:''
    });
    const [ errors, setErrors ] = useState({
        email:'' ,
        password:''
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        Validation({...userData, [property]: value}, errors, setErrors);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' value={userData.email} onChange={handleChange}/>
            <label htmlFor='password'>Password:</label>
            <input type='text' name='password' value={userData.password} onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}