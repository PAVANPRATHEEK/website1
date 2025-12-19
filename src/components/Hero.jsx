import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'var(--hero-gradient)',
            transition: 'background 0.3s',
            gap: '50px',
            padding: '0 10%'
        }}>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    padding: '4px',
                    background: 'linear-gradient(45deg, #0575E6, #021B79, #0575E6)',
                    backgroundSize: '200% 200%',
                    animation: 'gradient-spin 3s linear infinite',
                    boxShadow: '0 0 30px rgba(5, 117, 230, 0.4)',
                    flexShrink: 0
                }}
            >
                <img
                    src={profilePic}
                    alt="Pavan Pratheek"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid var(--bg-color)'
                    }}
                />
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <motion.h1
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '5rem',
                        fontWeight: '900',
                        marginBottom: '10px',
                        fontFamily: "'Orbitron', sans-serif",
                        background: 'var(--name-gradient)',
                        backgroundSize: '200% auto',
                        animation: 'shimmer 3s linear infinite',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 10px rgba(5, 117, 230, 0.5))',
                        letterSpacing: '5px',
                        textAlign: 'left'
                    }}
                >
                    PAVAN PRATHEEK
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '1.5rem', color: 'var(--text-color)', marginBottom: '20px', opacity: 0.8, textAlign: 'left' }}
                >
                    Building the future, one pixel at a time.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
