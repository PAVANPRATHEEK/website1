import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaSun } from 'react-icons/fa';
import batmanLogo from '../assets/batman.png';

const Navbar = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                backdropFilter: 'blur(10px)',
                background: 'var(--nav-bg)',
                zIndex: 1000,
                borderBottom: '1px solid var(--border-color)',
                transition: 'background 0.3s'
            }}
        >
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>

                <div
                    onClick={toggleTheme}
                    style={{
                        width: '60px',
                        height: '30px',
                        backgroundColor: theme === 'dark' ? '#0a0a0a' : '#fdfcf0',
                        border: '1px solid var(--border-color)',
                        borderRadius: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: theme === 'dark' ? 'flex-end' : 'flex-start',
                        padding: '2px',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 700, damping: 30 }}
                        style={{
                            width: '24px',
                            height: '24px',
                            backgroundColor: theme === 'dark' ? '#FFD700' : '#d4af37',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            border: theme === 'dark' ? '2px solid black' : 'none'
                        }}
                    >
                        {theme === 'dark' ? (
                            <img src={batmanLogo} alt="Batman" style={{ width: '80%', objectFit: 'contain' }} />
                        ) : (
                            <FaSun color="#fdfcf0" size={14} />
                        )}
                    </motion.div>
                </div>
                <span style={{
                    fontSize: '0.6rem',
                    fontWeight: 'bold',
                    color: theme === 'dark' ? '#FFD700' : 'var(--text-color)',
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: '1px',
                    marginLeft: '-10px',
                    opacity: 0.8
                }}>
                    {theme === 'dark' ? 'BATMAN MODE' : 'LIGHT MODE'}
                </span>
            </div>
        </motion.nav>
    );
};

const NavLink = ({ href, children }) => (
    <a
        href={href}
        style={{
            color: 'var(--text-color)',
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.color = '#646cff'}
        onMouseOut={(e) => e.target.style.color = 'var(--text-color)'}
    >
        {children}
    </a>
);

export default Navbar;
