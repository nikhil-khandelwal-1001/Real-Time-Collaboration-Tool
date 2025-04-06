import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });

            // Save user data in local storage
            console.log(data.username)
            localStorage.setItem('user', JSON.stringify({ username: data.username, token: data.token }));

            // Navigate to dashboard
            navigate('/dashboard');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message); 
                navigate('/login');
            } else {
                setError('An unexpected error occurred. Please try again later.');
                navigate('/login');
            }
        }
    };

    return (
        <div className="container login-container">
            <h2 className='login-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control input-field" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control input-field" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary login-btn">Login</button>
            </form>
            {error && <p className="text-danger mt-3">{error}</p>} {/* Display error message */}
            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
    );
};

export default Login;
