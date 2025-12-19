import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus('error');
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
                padding: '100px 20px',
                maxWidth: '600px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '80vh',
                justifyContent: 'center'
            }}
        >
            <h2 style={{ fontSize: '3rem', marginBottom: '40px', color: 'var(--text-color)', fontFamily: "'Orbitron', sans-serif" }}>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <motion.input
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    style={{
                        padding: '15px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--input-bg)',
                        color: 'var(--text-color)',
                        outline: 'none',
                    }}
                />
                <motion.input
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    style={{
                        padding: '15px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--input-bg)',
                        color: 'var(--text-color)',
                        outline: 'none',
                    }}
                />
                <motion.textarea
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                    style={{
                        padding: '15px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--input-bg)',
                        color: 'var(--text-color)',
                        outline: 'none',
                        resize: 'none',
                    }}
                />
                <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: '15px',
                        borderRadius: '10px',
                        background: 'var(--accent-gradient)',
                        border: 'none',
                        color: 'white',
                        fontWeight: 'bold',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        opacity: loading ? 0.7 : 1
                    }}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status === 'success' && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ color: '#00f260', textAlign: 'center' }}
                    >
                        Message sent successfully!
                    </motion.p>
                )}
                {status === 'error' && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ color: '#ff4d4d', textAlign: 'center' }}
                    >
                        Failed to send message. Please try again.
                    </motion.p>
                )}
            </form>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                    marginTop: '50px',
                    marginBottom: '20px',
                    fontSize: '1.2rem',
                    color: 'var(--text-color)',
                    textAlign: 'center',
                    fontFamily: "'Orbitron', sans-serif"
                }}
            >
                Stalk me professionally (or casually) 👇
            </motion.p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <motion.a
                    href="https://github.com/PAVANPRATHEEK/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '12px 25px',
                        borderRadius: '30px',
                        background: '#333',
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}
                >
                    <FaGithub size={20} />
                    GitHub
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/lokhande-pavan-pratheek-a10aa0371/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '12px 25px',
                        borderRadius: '30px',
                        background: '#0077b5',
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}
                >
                    <FaLinkedin size={20} />
                    LinkedIn
                </motion.a>

                <motion.a
                    href="https://www.instagram.com/pavanpratheek/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '12px 25px',
                        borderRadius: '30px',
                        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}
                >
                    <FaInstagram size={20} />
                    Instagram
                </motion.a>
            </div>
        </motion.div>
    );
};

export default Contact;
