import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SocialLinks = () => {
    return (
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
            <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#00f260' }}
                whileTap={{ scale: 0.9 }}
                style={{ color: 'var(--text-color)', fontSize: '2rem' }}
            >
                <FaGithub />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/lokhande-pavan-pratheek-a10aa0371/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#0077b5' }}
                whileTap={{ scale: 0.9 }}
                style={{ color: 'var(--text-color)', fontSize: '2rem' }}
            >
                <FaLinkedin />
            </motion.a>
        </div>
    );
};

export default SocialLinks;
