import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
            rotate: -45
        }
    };

    return (
        <motion.div
            variants={variants}
            animate="default"
            transition={{
                type: "spring",
                stiffness: 800,
                damping: 35,
                mass: 0.5
            }}
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: 9999,
                pointerEvents: 'none',
                mixBlendMode: 'difference'
            }}
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))' }}
            >
                <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
            </svg>
        </motion.div>
    );
};

export default Cursor;
