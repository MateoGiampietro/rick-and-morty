export default function Validation(userData, errors, setErrors) {
    const email = userData.email;
    const password = userData.password

    if (!email) setErrors({...errors, email:'El email no puede estar vacio.'});
    else {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) setErrors({...errors, email: ''});
        else setErrors({...errors, email: 'Email invalido'});
    }

    if (password.length < 6 || password.length > 10) setErrors({...errors, password:'La password debe ser entre 6 y 10 caracteres'});
    else setErrors({...errors, password:''});

    if (!password.includes(4)) setErrors({...errors, password:'La password debe contener el num 3'});
    else setErrors({...errors, password:''});
}