import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { signinUser } from './redux/authSlice';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        success: false
    })

    const {email, password, error, success} = values

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({email, password})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>email</label>
            <input type={email} value={email} onChange={(e) => setValues({...values, email: e.target.value})} />
            <label>password</label>
            <input type={password} value={password} onChange={(e) => setValues({...values, password: e.target.value})} />
            <button type="submit">Conferma</button>
        </form>
    )
}

export default Login;