import styles from './Header.module.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Tools', href: '#tools' },
        { name: 'Features', href: '#features' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Plans', href: '#plans' },
        { name: 'Contact', href: '#contact' }
    ];

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                duration: 0.3
            }
        })
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <motion.h1 
                className={styles.app_title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                ⚡ AI Boost
            </motion.h1>

            <nav className={styles.option_menu}>
                {navLinks.map((link, i) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        className={styles.option_link}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={navVariants}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                        <span className={styles.link_underline}></span>
                    </motion.a>
                ))}
            </nav>

            <button 
                className={styles.mobile_menu_button}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {mobileMenuOpen && (
                <motion.div 
                    className={styles.mobile_menu}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.mobile_link}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </header>
    );
}

export default Header;