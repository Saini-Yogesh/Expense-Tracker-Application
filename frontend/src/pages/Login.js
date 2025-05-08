import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import { AuthContext } from '../context/AuthContext';
import '../Css/AuthForm.css';

function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const { login: loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(form);
        if (res.token) {
            loginUser(res.token);
            navigate('/');
        } else {
            alert(res.message || 'Login failed');
        }
    };

    return (
        <div className="auth-form-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2 className="auth-form-header">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="auth-form-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="auth-form-input"
                />
                <button type="submit" className="auth-form-submit">Login</button>

                <div className="auth-form-footer">
                    <p>Don't have an account? <span onClick={() => navigate('/register')} className="auth-form-link">Register</span></p>
                </div>
            </form>
        </div>
    );
}

export default Login;
