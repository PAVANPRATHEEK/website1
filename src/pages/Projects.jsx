import { motion } from 'framer-motion';
import chaosMonkey from '../assets/chaos-monkey.png';

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
                padding: '100px 20px',
                maxWidth: '1200px',
                margin: '0 auto',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
        >
            <h2 style={{
                fontSize: '4rem',
                marginBottom: '40px',
                color: 'var(--text-color)',
                fontFamily: "'Orbitron', sans-serif",
                opacity: 0.8,
                letterSpacing: '5px',
                textTransform: 'uppercase'
            }}>
                Projects
            </h2>

            <motion.h2
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                style={{
                    fontSize: '2rem',
                    marginBottom: '40px',
                    textAlign: 'center',
                    color: '#FF0055',
                    fontFamily: "'Orbitron', sans-serif",
                    textShadow: '0 0 10px rgba(255, 0, 85, 0.5)'
                }}
            >
                👀 What are you looking for?
            </motion.h2>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                    maxWidth: '500px',
                    width: '100%',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    border: '1px solid var(--border-color)'
                }}
            >
                <img src={chaosMonkey} alt="Chaos Monkey" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                    marginTop: '30px',
                    textAlign: 'center',
                    maxWidth: '700px'
                }}
            >
                <p style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: 'var(--text-color)',
                    marginBottom: '10px'
                }}>
                    There is <span style={{ color: '#FFD700' }}>NOTHING</span> here!
                </p>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-color)',
                    opacity: 0.8,
                    fontStyle: 'italic'
                }}>
                    (Okay, maybe I'm building it right now. But seriously, go scroll down. There's a cool Contact form!)
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Projects;
