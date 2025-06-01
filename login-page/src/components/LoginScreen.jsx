import React, { useState} from 'react';
import axios from '../services/axiosInstance';
import '../components/LoginScreen.css';
function LoginScreen() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        expiresInMins: 30,
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});  
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('/auth/login', formData);
            setMessage(`Login Successful! Token: ${response.data.token}`);
        } catch (error) {
            setMessage(`Login Failed: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    return (
        <div className='login-container'>
            <div className='form-box'>
                <p className='start'>START FOR FREE</p>
                <h2>Create new account<span className='dot'>.</span></h2>
                <p className='login-link'>Already A Member? <a href="#" className='log-in-txt'>Log In</a></p>
                <form onSubmit={handleSubmit}>
                    <div className='name-fields'>
                        <input type="text" placeholder='First name'  />
                        <input type="text" placeholder='Last name'  />
                    </div>
                    <div className='name-field2'>
                        <input type='email' placeholder='Email' required/>
                        <input type='password' name='password' placeholder='Password' onChange={handleChange} required/>
                    </div>
                    <div className='buttons'>
                        <button type='button' className='secondary-btn'>Change method</button>
                        <button type='submit' className='primary-btn'>Create account</button>
                    </div>
                </form>
                <p className='message'>{message}</p>
            </div>
            <div className='image-section'>
                <image src='/src/assests/login-image.jpg' alt="Login Image" />
        </div>
        </div>
    );
}

export default LoginScreen;