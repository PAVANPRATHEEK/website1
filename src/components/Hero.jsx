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
                        objectFit: 'cover'
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
                        marginTop: '40px',
                        marginBottom: '20px',
                        fontFamily: "'Playfair Display', serif",
                        background: 'var(--name-gradient)',
                        backgroundSize: '200% auto',

                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))',
                        letterSpacing: '3px',
                        textAlign: 'left',
                        lineHeight: '1.2'
                    }}
                >
                    PAVAN PRATHEEK
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '20px',
                        padding: '30px 35px',
                        width: '100%',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(10px)',
                        marginBottom: '20px'
                    }}
                >
                    <p style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-color)',
                        margin: '0',
                        opacity: 0.88,
                        textAlign: 'left',
                        lineHeight: '1.9',
                        fontFamily: "'Lora', serif",
                        fontWeight: '400',
                        letterSpacing: '0.3px'
                    }}>
                        Curious by nature and always experimenting, I am a first-year student at <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>NIT Warangal</span> from the Mechanical Engineering department, currently exploring everything that grabs my interest—be it core mechanical areas or tech-related fields. I enjoy learning by trying things out, building projects, and figuring things out along the way, and I am also learning how AI automations work. Always learning, always evolving, and enjoying the process one step at a time.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
