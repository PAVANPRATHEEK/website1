import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'var(--bg-color)',
            overflow: 'hidden',
            padding: '20px'
        }}>
            <h2 style={{
                fontSize: '4rem',
                marginBottom: '20px',
                color: 'var(--text-color)',
                fontFamily: "'Orbitron', sans-serif",
                opacity: 0.8,
                letterSpacing: '5px',
                textTransform: 'uppercase'
            }}>
                Skills
            </h2>

            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ fontSize: '3rem', marginBottom: '15px' }}
            >
                👨‍🍳 🔥 🍳
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    color: 'var(--text-color)',
                    fontFamily: "'Orbitron', sans-serif",
                    marginBottom: '15px',
                    textTransform: 'uppercase',
                    letterSpacing: '3px'
                }}
            >
                Hold Up... <br />
                <span style={{ color: '#FFD700' }}>Let Him Cook!</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-color)',
                    maxWidth: '500px',
                    lineHeight: '1.5',
                    opacity: 0.8
                }}
            >
                I'm currently sautéing some new skills, grilling a backend, and seasoning the codebase.
                <br />
                <span style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#666' }}>
                    (It's gonna be compliant with Michelin stars, promise.)
                </span>
            </motion.p>
        </section>
    );
};

export default Skills;
