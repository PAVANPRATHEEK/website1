import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, null, '#home');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        width: '40px',
                        height: '40px',
                        background: 'var(--card-bg)', // Matches card bg (white/dark)
                        color: 'var(--text-color)',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid var(--border-color)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        backdropFilter: 'blur(5px)'
                    }}
                    whileHover={{
                        scale: 1.1,
                        background: 'var(--card-hover-bg)',
                        borderColor: 'var(--text-color)'
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowUp size={16} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
