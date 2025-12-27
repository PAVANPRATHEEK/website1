import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'AI News Automation',
            image: '/website1/n8n-workflow.png',
            description: 'Automated news summary system that delivers curated news updates daily at 7 AM via Telegram',
            tech: ['n8n', 'AI', 'Telegram API', 'Automation'],
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            features: [
                'Scheduled daily execution at 7 AM',
                'AI-powered news summarization',
                'Telegram bot integration',
                'Workflow automation with n8n'
            ]
        },
        {
            title: 'Portfolio Website',
            icon: '🌐',
            description: 'Modern, responsive portfolio website showcasing projects and skills with stunning animations and dark mode support',
            tech: ['React', 'Vite', 'Framer Motion', 'CSS'],
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            features: [
                'Smooth page transitions and animations',
                'Fully responsive design',
                'Dark/Light theme toggle',
                'Interactive UI components'
            ]
        },
        {
            title: '3D CAD Models',
            images: ['/website1/fusion-models-1.png', '/website1/fusion-models-2.png'],
            description: 'Collection of mechanical parts, assemblies, and prototypes designed in Fusion 360 for various engineering applications',
            tech: ['Fusion 360', 'CAD', '3D Modeling', 'Mechanical Design'],
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            features: [
                'Precision mechanical components',
                'Assembly designs and prototypes',
                'Gears, fasteners, and brackets',
                'Parametric modeling techniques'
            ]
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
                Projects
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px',
                    maxWidth: '1200px',
                    width: '100%'
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.03,
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
                            cursor: 'pointer',
                            textAlign: 'left'
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
                                background: project.gradient,
                                pointerEvents: 'none'
                            }}
                        />

                        {project.images ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                style={{
                                    width: '80%',
                                    margin: '0 auto 20px',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '10px'
                                }}
                            >
                                {project.images.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        style={{
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            border: '2px solid rgba(79, 172, 254, 0.3)',
                                            boxShadow: '0 8px 32px rgba(79, 172, 254, 0.2)',
                                            background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)',
                                            padding: '6px'
                                        }}
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} ${i + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '120px',
                                                display: 'block',
                                                borderRadius: '8px',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : project.image ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                                style={{
                                    width: '80%',
                                    height: '200px',
                                    margin: '0 auto 20px',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '2px solid rgba(102, 126, 234, 0.3)',
                                    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.2)',
                                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                                    padding: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'block',
                                        borderRadius: '12px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </motion.div>
                        ) : project.icon ? (
                            <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    fontSize: '4rem',
                                    marginBottom: '20px',
                                    textAlign: 'center'
                                }}
                            >
                                {project.icon}
                            </motion.div>
                        ) : null}

                        <h3 style={{
                            fontSize: '1.8rem',
                            color: 'var(--text-color)',
                            fontFamily: "'Orbitron', sans-serif",
                            marginBottom: '15px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        }}>
                            {project.title}
                        </h3>

                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--text-color)',
                            opacity: 0.8,
                            lineHeight: '1.6',
                            marginBottom: '20px'
                        }}>
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px',
                            marginBottom: '20px'
                        }}>
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    style={{
                                        padding: '6px 12px',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '20px',
                                        fontSize: '0.85rem',
                                        color: 'var(--text-color)',
                                        fontWeight: '500'
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Features */}
                        <div style={{
                            marginTop: '20px',
                            paddingTop: '20px',
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                            <h4 style={{
                                fontSize: '1rem',
                                color: 'var(--text-color)',
                                marginBottom: '10px',
                                fontWeight: '600',
                                opacity: 0.9
                            }}>
                                Key Features:
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {project.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            fontSize: '0.9rem',
                                            color: 'var(--text-color)',
                                            opacity: 0.7,
                                            marginBottom: '8px',
                                            paddingLeft: '20px',
                                            position: 'relative'
                                        }}
                                    >
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: '#00f260'
                                        }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
