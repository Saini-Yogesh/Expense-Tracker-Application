import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/api';
import '../Css/AuthForm.css';

function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await register(form);
        if (res.message === 'User registered successfully') {
            navigate('/login');
        } else {
            alert(res.message || 'Registration failed');
        }
    };

    return (
        <div className="auth-form-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2 className="auth-form-header">Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    className="auth-form-input"
                />
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
                <button type="submit" className="auth-form-submit">Sign Up</button>

                <div className="auth-form-footer">
                    <p>Already have an account? <span onClick={() => navigate('/login')} className="auth-form-link">Login</span></p>
                </div>
            </form>
        </div>
    );
}

export default Register;
