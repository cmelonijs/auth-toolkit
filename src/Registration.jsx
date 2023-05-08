import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from './redux/authSlice';

const Registration = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const {name, email, password, error, success} = values

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('values', values)
        dispatch(signupUser({name, email, password}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input value={name} onChange={(e) => setValues({...values, name: e.target.value})} />
            <label>email</label>
            <input type={email} value={email} onChange={(e) => setValues({...values, email: e.target.value})} />
            <label>password</label>
            <input type={password} value={password} onChange={(e) => setValues({...values, password: e.target.value})} />
            <button type="submit">Conferma</button>
        </form>
    )
}

export default Registration;