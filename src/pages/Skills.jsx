import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        {
            title: 'AI Automation',
            icon: '🤖',
            description: 'Building intelligent systems and automating workflows with cutting-edge AI technologies',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            title: 'Web Development',
            icon: '💻',
            description: 'Creating responsive, modern web applications with the latest frameworks and best practices',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            title: 'CAD',
            icon: '📐',
            description: 'Designing and modeling complex 3D structures with precision and creativity',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: 'var(--bg-color)',
            padding: '80px 20px'
        }}>
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                    fontSize: '4rem',
                    marginBottom: '60px',
                    color: 'var(--text-color)',
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: '5px',
                    textTransform: 'uppercase'
                }}
            >
                Skills
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    maxWidth: '1200px',
                    width: '100%'
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                        style={{
                            position: 'relative',
                            padding: '40px 30px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)',
                            overflow: 'hidden',
                            cursor: 'pointer'
                        }}
                    >
                        {/* Gradient overlay on hover */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: skill.gradient,
                                pointerEvents: 'none'
                            }}
                        />

                        <motion.div
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                fontSize: '4rem',
                                marginBottom: '20px'
                            }}
                        >
                            {skill.icon}
                        </motion.div>

                        <h3 style={{
                            fontSize: '1.8rem',
                            color: 'var(--text-color)',
                            fontFamily: "'Orbitron', sans-serif",
                            marginBottom: '15px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase'
                        }}>
                            {skill.title}
                        </h3>

                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--text-color)',
                            opacity: 0.7,
                            lineHeight: '1.6'
                        }}>
                            {skill.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
