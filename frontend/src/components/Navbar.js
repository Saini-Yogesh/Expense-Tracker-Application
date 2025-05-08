import React, { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './logo.png'; // Adjust path if needed
import '../Css/Navbar.css';

const Navbar = () => {
    const { token, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleLogout = () => {
        logout();
        setMenuOpen(false);
        navigate('/login');
    };

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={() => navigate('/')}>
                <img src={logo} alt="Expense Tracker" />
            </div>

            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={`navbar-links ${menuOpen ? 'open' : ''}`} ref={menuRef}>
                {token ? (
                    <>
                        <button className="navbar-button" onClick={() => { setMenuOpen(false); navigate('/about'); }}>About Us</button>
                        <button className="navbar-button" onClick={() => { setMenuOpen(false); navigate('/summary'); }}>Summary</button>
                        <button className="navbar-button" onClick={() => { setMenuOpen(false); navigate('/profile'); }}>Profile</button>
                        <button className="navbar-button" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <button className="navbar-button" onClick={() => { setMenuOpen(false); navigate('/about'); }}>About Us</button>
                        <button className="navbar-button" onClick={() => { setMenuOpen(false); navigate('/login'); }}>Login</button>
                        <button className="navbar-button" onClick={() => { setMenuOpen(false); navigate('/register'); }}>Register</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
