
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick: () => void }> = ({ to, children, onClick }) => {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                `block md:inline-block px-4 py-2 md:py-0 text-base md:text-sm uppercase font-display tracking-wider font-black transition-colors duration-300 ${
                isActive ? 'text-primary' : 'text-light-text hover:text-primary bold-text'
                }`
            }
        >
            {children}
        </NavLink>
    );
};


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const closeMenu = () => {
        setIsOpen(false);
    }

    const menuVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 },
    };

    return (
        <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-lg border-b-2 border-secondary">
            <div className="container mx-auto px-2 sm:px-4 py-1 flex justify-between items-center">
                <NavLink to="/" className="flex items-center gap-2 text-2xl sm:text-3xl font-display font-black text-dark-text tracking-widest">
                    <Logo className="h-28 w-28 text-secondary" />
                </NavLink>
                <nav className="hidden md:flex space-x-3" role="navigation" aria-label="Main navigation">
                    <NavItem to="/" onClick={closeMenu}>Home</NavItem>
                    <NavItem to="/about" onClick={closeMenu}>About</NavItem>
                    <NavItem to="/services" onClick={closeMenu}>Services</NavItem>
                    <NavItem to="/sales" onClick={closeMenu}>Car Sales</NavItem>
                    <NavItem to="/gallery" onClick={closeMenu}>Gallery</NavItem>
                    <NavItem to="/contact" onClick={closeMenu}>Contact</NavItem>
                </nav>
                <div className="hidden md:flex items-center space-x-4">
                    <NavLink 
                        to="/contact" 
                        className="flex items-center bg-secondary text-white font-display font-black tracking-wider text-sm uppercase hover:bg-secondary-hover transition-colors px-4 py-2 rounded-md shadow-md vibrant-shadow-blue"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call Now
                    </NavLink>
                </div>
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-dark-text focus:outline-none z-50 relative p-2 rounded-md focus-visible:ring-2 focus-visible:ring-secondary bg-secondary/10 hover:bg-secondary/20"
                        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? (
                            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        )}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-white absolute w-full left-0 top-full shadow-xl border-t-2 border-secondary"
                    >
                        <nav className="flex flex-col items-center py-4 space-y-3" role="navigation" aria-label="Mobile navigation">
                           <NavItem to="/" onClick={closeMenu}>Home</NavItem>
                           <NavItem to="/about" onClick={closeMenu}>About</NavItem>
                           <NavItem to="/services" onClick={closeMenu}>Services</NavItem>
                           <NavItem to="/sales" onClick={closeMenu}>Car Sales</NavItem>
                           <NavItem to="/gallery" onClick={closeMenu}>Gallery</NavItem>
                           <NavItem to="/contact" onClick={closeMenu}>Contact</NavItem>
                           <NavLink 
                                to="/contact" 
                                className="flex items-center bg-secondary text-white font-display font-black tracking-wider text-base uppercase hover:bg-secondary-hover transition-colors px-6 py-3 rounded-md shadow-md mt-2 vibrant-shadow-blue"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Now
                            </NavLink>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;